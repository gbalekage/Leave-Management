const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    error.statusCode = 404;
    next(error);
};

const errorHandler = (error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }

    const statusCode =
        typeof error.code === "number"
            ? error.code
            : error.statusCode || 500;

    res.status(statusCode).json({
        message: error.message || "Une erreur inconnue est survenue.",
    });
};

module.exports = {notFound, errorHandler};
