import AdminLayout from "@/components/admin/layout";
import {ThemeBtn} from "@/components/global/theme-btn";
import {Badge} from "@/components/ui/badge";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
} from "@/components/ui/breadcrumb";
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import {SidebarTrigger} from "@/components/ui/sidebar";
import {UserContext} from "@/context/user";
import {useContext, useEffect, useState} from "react";
import {IconTrendingDown, IconTrendingUp} from "@tabler/icons-react";
import {Link} from "react-router-dom";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
    Legend,
} from "recharts";

import {format} from "date-fns";
import type {DateRange} from "react-day-picker";
import {CalendarDateRangePicker} from "@/components/global/date-range-picker";
import axios from "axios";

const AdminDashboard = () => {
    const {user} = useContext(UserContext);

    const [pendingCount, setPendingCount] = useState(0);
    const [acceptedCount, setAcceptedCount] = useState(0);
    const [rejectedCount, setRejectedCount] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    const [chartData, setChartData] = useState<
        { date: string; accepted: number; pending: number; rejected: number }[]
    >([]);

    // ✅ Default start date: today, end date: undefined
    const [dateRange, setDateRange] = useState<DateRange | undefined>({
        from: new Date(),
        to: undefined,
    });

    const cardBaseClass = "@container/card";

    useEffect(() => {
        const fetchData = async () => {
            const serverUrl = import.meta.env.VITE_SERVER_URL;
            if (!dateRange?.from) return;

            const from = dateRange.from.toISOString().split("T")[0];
            const to = dateRange.to
                ? dateRange.to.toISOString().split("T")[0]
                : from; // fallback to `from` if `to` is undefined

            try {
                const res = await axios.get(
                    `${serverUrl}/api/leaves/stats?from=${from}&to=${to}`
                );
                const data = res.data;

                setAcceptedCount(data.accepted);
                setPendingCount(data.pending);
                setRejectedCount(data.rejected);
                setTotalCount(data.total);
                setChartData(data.chart);
            } catch (error) {
                console.error("Erreur chargement données congés:", error);
            }
        };

        fetchData();
    }, [dateRange]);

    return (
        <AdminLayout>
            <header className="flex h-16 items-center justify-between gap-2 border-b">
                <div className="flex items-center gap-2 px-3">
                    <SidebarTrigger/>
                    <Separator orientation="vertical" className="mr-2 h-4"/>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem className="hidden md:block">
                                <BreadcrumbLink>Bonjour, {user?.name}</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <div className="p-3">
                    <ThemeBtn/>
                </div>
            </header>

            <div className="flex flex-1 flex-col gap-4 p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-4">
                    {[
                        {
                            title: "Nombre total de demandes",
                            value: totalCount,
                            link: "/leaves",
                            color: "text-green-600",
                            trend: <IconTrendingUp/>,
                        },
                        {
                            title: "Demandes approuvées",
                            value: acceptedCount,
                            link: "/leaves/accepted",
                            color: "text-green-600",
                            trend: <IconTrendingUp/>,
                        },
                        {
                            title: "Demandes en attente",
                            value: pendingCount,
                            link: "/leaves/pending",
                            color: "text-yellow-600",
                            trend: <IconTrendingUp/>,
                        },
                        {
                            title: "Demandes refusées",
                            value: rejectedCount,
                            link: "/leaves/rejected",
                            color: "text-red-600",
                            trend: <IconTrendingDown/>,
                        },
                    ].map((item, i) => (
                        <Card key={i} className={cardBaseClass}>
                            <CardHeader>
                                <CardDescription>{item.title}</CardDescription>
                                <CardTitle>{item.value}</CardTitle>
                                <CardAction>
                                    <Link to={item.link}>
                                        <Badge variant="outline">Voir toutes</Badge>
                                    </Link>
                                </CardAction>
                            </CardHeader>
                            <CardFooter>
                                <div className={`flex gap-2 text-sm font-medium ${item.color}`}>
                                    Tendance {item.trend}
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <Card className="mt-6">
                    <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <CardTitle className="text-lg font-semibold">
                            Statistiques de congés
                        </CardTitle>
                        <CalendarDateRangePicker
                            date={dateRange}
                            setDate={setDateRange}
                        />
                    </CardHeader>
                    <CardFooter className="px-6 pb-6">
                        {chartData.length === 0 ? (
                            <div className="text-muted-foreground">Aucune donnée disponible</div>
                        ) : (
                            <ResponsiveContainer width="100%" height={320}>
                                <BarChart
                                    data={chartData}
                                    margin={{top: 10, right: 30, left: 0, bottom: 0}}
                                >
                                    <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                                    <XAxis
                                        dataKey="date"
                                        tickFormatter={(d) => format(new Date(d), "dd MMM")}
                                        fontSize={12}
                                        tickMargin={10}
                                    />
                                    <YAxis fontSize={12} tickMargin={10}/>
                                    <Tooltip
                                        contentStyle={{fontSize: "0.875rem", borderRadius: "0.5rem"}}
                                        labelFormatter={(label) =>
                                            `Date: ${format(new Date(label), "dd MMM yyyy")}`
                                        }
                                    />
                                    <Legend verticalAlign="top" height={36}/>
                                    <Bar
                                        dataKey="accepted"
                                        name="Approuvées"
                                        fill="#22c55e"
                                        radius={[4, 4, 0, 0]}
                                    />
                                    <Bar
                                        dataKey="pending"
                                        name="En attente"
                                        fill="#facc15"
                                        radius={[4, 4, 0, 0]}
                                    />
                                    <Bar
                                        dataKey="rejected"
                                        name="Refusées"
                                        fill="#ef4444"
                                        radius={[4, 4, 0, 0]}
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        )}
                    </CardFooter>


                </Card>
            </div>
        </AdminLayout>
    );
};

export default AdminDashboard;
