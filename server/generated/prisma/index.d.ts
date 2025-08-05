
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Leave
 * 
 */
export type Leave = $Result.DefaultSelection<Prisma.$LeavePayload>
/**
 * Model LeaveBalance
 * 
 */
export type LeaveBalance = $Result.DefaultSelection<Prisma.$LeaveBalancePayload>
/**
 * Model LeaveHistory
 * 
 */
export type LeaveHistory = $Result.DefaultSelection<Prisma.$LeaveHistoryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const LeaveType: {
  ANNUAL: 'ANNUAL',
  SICK: 'SICK',
  MATERNITY: 'MATERNITY',
  PATERNITY: 'PATERNITY',
  UNPAID: 'UNPAID'
};

export type LeaveType = (typeof LeaveType)[keyof typeof LeaveType]


export const LeaveStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  CANCELLED: 'CANCELLED'
};

export type LeaveStatus = (typeof LeaveStatus)[keyof typeof LeaveStatus]


export const HistoryAction: {
  CREATED: 'CREATED',
  UPDATED: 'UPDATED',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  CANCELLED: 'CANCELLED'
};

export type HistoryAction = (typeof HistoryAction)[keyof typeof HistoryAction]


export const Role: {
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER',
  EMPLOYEE: 'EMPLOYEE'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type LeaveType = $Enums.LeaveType

export const LeaveType: typeof $Enums.LeaveType

export type LeaveStatus = $Enums.LeaveStatus

export const LeaveStatus: typeof $Enums.LeaveStatus

export type HistoryAction = $Enums.HistoryAction

export const HistoryAction: typeof $Enums.HistoryAction

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leave`: Exposes CRUD operations for the **Leave** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leaves
    * const leaves = await prisma.leave.findMany()
    * ```
    */
  get leave(): Prisma.LeaveDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leaveBalance`: Exposes CRUD operations for the **LeaveBalance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LeaveBalances
    * const leaveBalances = await prisma.leaveBalance.findMany()
    * ```
    */
  get leaveBalance(): Prisma.LeaveBalanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leaveHistory`: Exposes CRUD operations for the **LeaveHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LeaveHistories
    * const leaveHistories = await prisma.leaveHistory.findMany()
    * ```
    */
  get leaveHistory(): Prisma.LeaveHistoryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Leave: 'Leave',
    LeaveBalance: 'LeaveBalance',
    LeaveHistory: 'LeaveHistory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "leave" | "leaveBalance" | "leaveHistory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Leave: {
        payload: Prisma.$LeavePayload<ExtArgs>
        fields: Prisma.LeaveFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeaveFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeaveFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload>
          }
          findFirst: {
            args: Prisma.LeaveFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeaveFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload>
          }
          findMany: {
            args: Prisma.LeaveFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload>[]
          }
          create: {
            args: Prisma.LeaveCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload>
          }
          createMany: {
            args: Prisma.LeaveCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeaveCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload>[]
          }
          delete: {
            args: Prisma.LeaveDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload>
          }
          update: {
            args: Prisma.LeaveUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload>
          }
          deleteMany: {
            args: Prisma.LeaveDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeaveUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeaveUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload>[]
          }
          upsert: {
            args: Prisma.LeaveUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload>
          }
          aggregate: {
            args: Prisma.LeaveAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeave>
          }
          groupBy: {
            args: Prisma.LeaveGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeaveGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeaveCountArgs<ExtArgs>
            result: $Utils.Optional<LeaveCountAggregateOutputType> | number
          }
        }
      }
      LeaveBalance: {
        payload: Prisma.$LeaveBalancePayload<ExtArgs>
        fields: Prisma.LeaveBalanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeaveBalanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveBalancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeaveBalanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveBalancePayload>
          }
          findFirst: {
            args: Prisma.LeaveBalanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveBalancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeaveBalanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveBalancePayload>
          }
          findMany: {
            args: Prisma.LeaveBalanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveBalancePayload>[]
          }
          create: {
            args: Prisma.LeaveBalanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveBalancePayload>
          }
          createMany: {
            args: Prisma.LeaveBalanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeaveBalanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveBalancePayload>[]
          }
          delete: {
            args: Prisma.LeaveBalanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveBalancePayload>
          }
          update: {
            args: Prisma.LeaveBalanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveBalancePayload>
          }
          deleteMany: {
            args: Prisma.LeaveBalanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeaveBalanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeaveBalanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveBalancePayload>[]
          }
          upsert: {
            args: Prisma.LeaveBalanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveBalancePayload>
          }
          aggregate: {
            args: Prisma.LeaveBalanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeaveBalance>
          }
          groupBy: {
            args: Prisma.LeaveBalanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeaveBalanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeaveBalanceCountArgs<ExtArgs>
            result: $Utils.Optional<LeaveBalanceCountAggregateOutputType> | number
          }
        }
      }
      LeaveHistory: {
        payload: Prisma.$LeaveHistoryPayload<ExtArgs>
        fields: Prisma.LeaveHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeaveHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeaveHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveHistoryPayload>
          }
          findFirst: {
            args: Prisma.LeaveHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeaveHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveHistoryPayload>
          }
          findMany: {
            args: Prisma.LeaveHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveHistoryPayload>[]
          }
          create: {
            args: Prisma.LeaveHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveHistoryPayload>
          }
          createMany: {
            args: Prisma.LeaveHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeaveHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveHistoryPayload>[]
          }
          delete: {
            args: Prisma.LeaveHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveHistoryPayload>
          }
          update: {
            args: Prisma.LeaveHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveHistoryPayload>
          }
          deleteMany: {
            args: Prisma.LeaveHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeaveHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeaveHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveHistoryPayload>[]
          }
          upsert: {
            args: Prisma.LeaveHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveHistoryPayload>
          }
          aggregate: {
            args: Prisma.LeaveHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeaveHistory>
          }
          groupBy: {
            args: Prisma.LeaveHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeaveHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeaveHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<LeaveHistoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    leave?: LeaveOmit
    leaveBalance?: LeaveBalanceOmit
    leaveHistory?: LeaveHistoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    leaves: number
    balances: number
    reviews: number
    LeaveHistory: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leaves?: boolean | UserCountOutputTypeCountLeavesArgs
    balances?: boolean | UserCountOutputTypeCountBalancesArgs
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
    LeaveHistory?: boolean | UserCountOutputTypeCountLeaveHistoryArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLeavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaveWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBalancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaveBalanceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaveWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLeaveHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaveHistoryWhereInput
  }


  /**
   * Count Type LeaveCountOutputType
   */

  export type LeaveCountOutputType = {
    history: number
  }

  export type LeaveCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    history?: boolean | LeaveCountOutputTypeCountHistoryArgs
  }

  // Custom InputTypes
  /**
   * LeaveCountOutputType without action
   */
  export type LeaveCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveCountOutputType
     */
    select?: LeaveCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LeaveCountOutputType without action
   */
  export type LeaveCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaveHistoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    matricule: string | null
    password: string | null
    verificationCode: string | null
    verificationExpiration: Date | null
    resetToken: string | null
    resetTokenExpiration: Date | null
    isVerified: boolean | null
    lastLogin: Date | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    matricule: string | null
    password: string | null
    verificationCode: string | null
    verificationExpiration: Date | null
    resetToken: string | null
    resetTokenExpiration: Date | null
    isVerified: boolean | null
    lastLogin: Date | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    matricule: number
    password: number
    verificationCode: number
    verificationExpiration: number
    resetToken: number
    resetTokenExpiration: number
    isVerified: number
    lastLogin: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    matricule?: true
    password?: true
    verificationCode?: true
    verificationExpiration?: true
    resetToken?: true
    resetTokenExpiration?: true
    isVerified?: true
    lastLogin?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    matricule?: true
    password?: true
    verificationCode?: true
    verificationExpiration?: true
    resetToken?: true
    resetTokenExpiration?: true
    isVerified?: true
    lastLogin?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    matricule?: true
    password?: true
    verificationCode?: true
    verificationExpiration?: true
    resetToken?: true
    resetTokenExpiration?: true
    isVerified?: true
    lastLogin?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    matricule: string
    password: string
    verificationCode: string | null
    verificationExpiration: Date | null
    resetToken: string | null
    resetTokenExpiration: Date | null
    isVerified: boolean
    lastLogin: Date
    role: $Enums.Role
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    matricule?: boolean
    password?: boolean
    verificationCode?: boolean
    verificationExpiration?: boolean
    resetToken?: boolean
    resetTokenExpiration?: boolean
    isVerified?: boolean
    lastLogin?: boolean
    role?: boolean
    createdAt?: boolean
    leaves?: boolean | User$leavesArgs<ExtArgs>
    balances?: boolean | User$balancesArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    LeaveHistory?: boolean | User$LeaveHistoryArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    matricule?: boolean
    password?: boolean
    verificationCode?: boolean
    verificationExpiration?: boolean
    resetToken?: boolean
    resetTokenExpiration?: boolean
    isVerified?: boolean
    lastLogin?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    matricule?: boolean
    password?: boolean
    verificationCode?: boolean
    verificationExpiration?: boolean
    resetToken?: boolean
    resetTokenExpiration?: boolean
    isVerified?: boolean
    lastLogin?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    matricule?: boolean
    password?: boolean
    verificationCode?: boolean
    verificationExpiration?: boolean
    resetToken?: boolean
    resetTokenExpiration?: boolean
    isVerified?: boolean
    lastLogin?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "matricule" | "password" | "verificationCode" | "verificationExpiration" | "resetToken" | "resetTokenExpiration" | "isVerified" | "lastLogin" | "role" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leaves?: boolean | User$leavesArgs<ExtArgs>
    balances?: boolean | User$balancesArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    LeaveHistory?: boolean | User$LeaveHistoryArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      leaves: Prisma.$LeavePayload<ExtArgs>[]
      balances: Prisma.$LeaveBalancePayload<ExtArgs>[]
      reviews: Prisma.$LeavePayload<ExtArgs>[]
      LeaveHistory: Prisma.$LeaveHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      matricule: string
      password: string
      verificationCode: string | null
      verificationExpiration: Date | null
      resetToken: string | null
      resetTokenExpiration: Date | null
      isVerified: boolean
      lastLogin: Date
      role: $Enums.Role
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    leaves<T extends User$leavesArgs<ExtArgs> = {}>(args?: Subset<T, User$leavesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    balances<T extends User$balancesArgs<ExtArgs> = {}>(args?: Subset<T, User$balancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveBalancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    LeaveHistory<T extends User$LeaveHistoryArgs<ExtArgs> = {}>(args?: Subset<T, User$LeaveHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly matricule: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly verificationCode: FieldRef<"User", 'String'>
    readonly verificationExpiration: FieldRef<"User", 'DateTime'>
    readonly resetToken: FieldRef<"User", 'String'>
    readonly resetTokenExpiration: FieldRef<"User", 'DateTime'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly lastLogin: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.leaves
   */
  export type User$leavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    where?: LeaveWhereInput
    orderBy?: LeaveOrderByWithRelationInput | LeaveOrderByWithRelationInput[]
    cursor?: LeaveWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaveScalarFieldEnum | LeaveScalarFieldEnum[]
  }

  /**
   * User.balances
   */
  export type User$balancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveBalance
     */
    select?: LeaveBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveBalance
     */
    omit?: LeaveBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveBalanceInclude<ExtArgs> | null
    where?: LeaveBalanceWhereInput
    orderBy?: LeaveBalanceOrderByWithRelationInput | LeaveBalanceOrderByWithRelationInput[]
    cursor?: LeaveBalanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaveBalanceScalarFieldEnum | LeaveBalanceScalarFieldEnum[]
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    where?: LeaveWhereInput
    orderBy?: LeaveOrderByWithRelationInput | LeaveOrderByWithRelationInput[]
    cursor?: LeaveWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaveScalarFieldEnum | LeaveScalarFieldEnum[]
  }

  /**
   * User.LeaveHistory
   */
  export type User$LeaveHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveHistory
     */
    select?: LeaveHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveHistory
     */
    omit?: LeaveHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveHistoryInclude<ExtArgs> | null
    where?: LeaveHistoryWhereInput
    orderBy?: LeaveHistoryOrderByWithRelationInput | LeaveHistoryOrderByWithRelationInput[]
    cursor?: LeaveHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaveHistoryScalarFieldEnum | LeaveHistoryScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Leave
   */

  export type AggregateLeave = {
    _count: LeaveCountAggregateOutputType | null
    _avg: LeaveAvgAggregateOutputType | null
    _sum: LeaveSumAggregateOutputType | null
    _min: LeaveMinAggregateOutputType | null
    _max: LeaveMaxAggregateOutputType | null
  }

  export type LeaveAvgAggregateOutputType = {
    duration: number | null
  }

  export type LeaveSumAggregateOutputType = {
    duration: number | null
  }

  export type LeaveMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.LeaveType | null
    startDate: Date | null
    endDate: Date | null
    duration: number | null
    reason: string | null
    status: $Enums.LeaveStatus | null
    reviewedBy: string | null
    comment: string | null
    documentUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LeaveMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.LeaveType | null
    startDate: Date | null
    endDate: Date | null
    duration: number | null
    reason: string | null
    status: $Enums.LeaveStatus | null
    reviewedBy: string | null
    comment: string | null
    documentUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LeaveCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    startDate: number
    endDate: number
    duration: number
    reason: number
    status: number
    reviewedBy: number
    comment: number
    documentUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LeaveAvgAggregateInputType = {
    duration?: true
  }

  export type LeaveSumAggregateInputType = {
    duration?: true
  }

  export type LeaveMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    startDate?: true
    endDate?: true
    duration?: true
    reason?: true
    status?: true
    reviewedBy?: true
    comment?: true
    documentUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LeaveMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    startDate?: true
    endDate?: true
    duration?: true
    reason?: true
    status?: true
    reviewedBy?: true
    comment?: true
    documentUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LeaveCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    startDate?: true
    endDate?: true
    duration?: true
    reason?: true
    status?: true
    reviewedBy?: true
    comment?: true
    documentUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LeaveAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leave to aggregate.
     */
    where?: LeaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leaves to fetch.
     */
    orderBy?: LeaveOrderByWithRelationInput | LeaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Leaves
    **/
    _count?: true | LeaveCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeaveAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeaveSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeaveMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeaveMaxAggregateInputType
  }

  export type GetLeaveAggregateType<T extends LeaveAggregateArgs> = {
        [P in keyof T & keyof AggregateLeave]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeave[P]>
      : GetScalarType<T[P], AggregateLeave[P]>
  }




  export type LeaveGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaveWhereInput
    orderBy?: LeaveOrderByWithAggregationInput | LeaveOrderByWithAggregationInput[]
    by: LeaveScalarFieldEnum[] | LeaveScalarFieldEnum
    having?: LeaveScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeaveCountAggregateInputType | true
    _avg?: LeaveAvgAggregateInputType
    _sum?: LeaveSumAggregateInputType
    _min?: LeaveMinAggregateInputType
    _max?: LeaveMaxAggregateInputType
  }

  export type LeaveGroupByOutputType = {
    id: string
    userId: string
    type: $Enums.LeaveType
    startDate: Date
    endDate: Date
    duration: number
    reason: string
    status: $Enums.LeaveStatus
    reviewedBy: string | null
    comment: string | null
    documentUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: LeaveCountAggregateOutputType | null
    _avg: LeaveAvgAggregateOutputType | null
    _sum: LeaveSumAggregateOutputType | null
    _min: LeaveMinAggregateOutputType | null
    _max: LeaveMaxAggregateOutputType | null
  }

  type GetLeaveGroupByPayload<T extends LeaveGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeaveGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeaveGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeaveGroupByOutputType[P]>
            : GetScalarType<T[P], LeaveGroupByOutputType[P]>
        }
      >
    >


  export type LeaveSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    startDate?: boolean
    endDate?: boolean
    duration?: boolean
    reason?: boolean
    status?: boolean
    reviewedBy?: boolean
    comment?: boolean
    documentUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    reviewer?: boolean | Leave$reviewerArgs<ExtArgs>
    history?: boolean | Leave$historyArgs<ExtArgs>
    _count?: boolean | LeaveCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leave"]>

  export type LeaveSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    startDate?: boolean
    endDate?: boolean
    duration?: boolean
    reason?: boolean
    status?: boolean
    reviewedBy?: boolean
    comment?: boolean
    documentUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    reviewer?: boolean | Leave$reviewerArgs<ExtArgs>
  }, ExtArgs["result"]["leave"]>

  export type LeaveSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    startDate?: boolean
    endDate?: boolean
    duration?: boolean
    reason?: boolean
    status?: boolean
    reviewedBy?: boolean
    comment?: boolean
    documentUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    reviewer?: boolean | Leave$reviewerArgs<ExtArgs>
  }, ExtArgs["result"]["leave"]>

  export type LeaveSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    startDate?: boolean
    endDate?: boolean
    duration?: boolean
    reason?: boolean
    status?: boolean
    reviewedBy?: boolean
    comment?: boolean
    documentUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LeaveOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "startDate" | "endDate" | "duration" | "reason" | "status" | "reviewedBy" | "comment" | "documentUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["leave"]>
  export type LeaveInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    reviewer?: boolean | Leave$reviewerArgs<ExtArgs>
    history?: boolean | Leave$historyArgs<ExtArgs>
    _count?: boolean | LeaveCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LeaveIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    reviewer?: boolean | Leave$reviewerArgs<ExtArgs>
  }
  export type LeaveIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    reviewer?: boolean | Leave$reviewerArgs<ExtArgs>
  }

  export type $LeavePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Leave"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      reviewer: Prisma.$UserPayload<ExtArgs> | null
      history: Prisma.$LeaveHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: $Enums.LeaveType
      startDate: Date
      endDate: Date
      duration: number
      reason: string
      status: $Enums.LeaveStatus
      reviewedBy: string | null
      comment: string | null
      documentUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["leave"]>
    composites: {}
  }

  type LeaveGetPayload<S extends boolean | null | undefined | LeaveDefaultArgs> = $Result.GetResult<Prisma.$LeavePayload, S>

  type LeaveCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeaveFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeaveCountAggregateInputType | true
    }

  export interface LeaveDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Leave'], meta: { name: 'Leave' } }
    /**
     * Find zero or one Leave that matches the filter.
     * @param {LeaveFindUniqueArgs} args - Arguments to find a Leave
     * @example
     * // Get one Leave
     * const leave = await prisma.leave.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeaveFindUniqueArgs>(args: SelectSubset<T, LeaveFindUniqueArgs<ExtArgs>>): Prisma__LeaveClient<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Leave that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeaveFindUniqueOrThrowArgs} args - Arguments to find a Leave
     * @example
     * // Get one Leave
     * const leave = await prisma.leave.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeaveFindUniqueOrThrowArgs>(args: SelectSubset<T, LeaveFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeaveClient<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leave that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveFindFirstArgs} args - Arguments to find a Leave
     * @example
     * // Get one Leave
     * const leave = await prisma.leave.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeaveFindFirstArgs>(args?: SelectSubset<T, LeaveFindFirstArgs<ExtArgs>>): Prisma__LeaveClient<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leave that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveFindFirstOrThrowArgs} args - Arguments to find a Leave
     * @example
     * // Get one Leave
     * const leave = await prisma.leave.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeaveFindFirstOrThrowArgs>(args?: SelectSubset<T, LeaveFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeaveClient<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Leaves that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leaves
     * const leaves = await prisma.leave.findMany()
     * 
     * // Get first 10 Leaves
     * const leaves = await prisma.leave.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leaveWithIdOnly = await prisma.leave.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeaveFindManyArgs>(args?: SelectSubset<T, LeaveFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Leave.
     * @param {LeaveCreateArgs} args - Arguments to create a Leave.
     * @example
     * // Create one Leave
     * const Leave = await prisma.leave.create({
     *   data: {
     *     // ... data to create a Leave
     *   }
     * })
     * 
     */
    create<T extends LeaveCreateArgs>(args: SelectSubset<T, LeaveCreateArgs<ExtArgs>>): Prisma__LeaveClient<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Leaves.
     * @param {LeaveCreateManyArgs} args - Arguments to create many Leaves.
     * @example
     * // Create many Leaves
     * const leave = await prisma.leave.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeaveCreateManyArgs>(args?: SelectSubset<T, LeaveCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leaves and returns the data saved in the database.
     * @param {LeaveCreateManyAndReturnArgs} args - Arguments to create many Leaves.
     * @example
     * // Create many Leaves
     * const leave = await prisma.leave.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leaves and only return the `id`
     * const leaveWithIdOnly = await prisma.leave.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeaveCreateManyAndReturnArgs>(args?: SelectSubset<T, LeaveCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Leave.
     * @param {LeaveDeleteArgs} args - Arguments to delete one Leave.
     * @example
     * // Delete one Leave
     * const Leave = await prisma.leave.delete({
     *   where: {
     *     // ... filter to delete one Leave
     *   }
     * })
     * 
     */
    delete<T extends LeaveDeleteArgs>(args: SelectSubset<T, LeaveDeleteArgs<ExtArgs>>): Prisma__LeaveClient<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Leave.
     * @param {LeaveUpdateArgs} args - Arguments to update one Leave.
     * @example
     * // Update one Leave
     * const leave = await prisma.leave.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeaveUpdateArgs>(args: SelectSubset<T, LeaveUpdateArgs<ExtArgs>>): Prisma__LeaveClient<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Leaves.
     * @param {LeaveDeleteManyArgs} args - Arguments to filter Leaves to delete.
     * @example
     * // Delete a few Leaves
     * const { count } = await prisma.leave.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeaveDeleteManyArgs>(args?: SelectSubset<T, LeaveDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leaves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leaves
     * const leave = await prisma.leave.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeaveUpdateManyArgs>(args: SelectSubset<T, LeaveUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leaves and returns the data updated in the database.
     * @param {LeaveUpdateManyAndReturnArgs} args - Arguments to update many Leaves.
     * @example
     * // Update many Leaves
     * const leave = await prisma.leave.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Leaves and only return the `id`
     * const leaveWithIdOnly = await prisma.leave.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LeaveUpdateManyAndReturnArgs>(args: SelectSubset<T, LeaveUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Leave.
     * @param {LeaveUpsertArgs} args - Arguments to update or create a Leave.
     * @example
     * // Update or create a Leave
     * const leave = await prisma.leave.upsert({
     *   create: {
     *     // ... data to create a Leave
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Leave we want to update
     *   }
     * })
     */
    upsert<T extends LeaveUpsertArgs>(args: SelectSubset<T, LeaveUpsertArgs<ExtArgs>>): Prisma__LeaveClient<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Leaves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveCountArgs} args - Arguments to filter Leaves to count.
     * @example
     * // Count the number of Leaves
     * const count = await prisma.leave.count({
     *   where: {
     *     // ... the filter for the Leaves we want to count
     *   }
     * })
    **/
    count<T extends LeaveCountArgs>(
      args?: Subset<T, LeaveCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeaveCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Leave.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeaveAggregateArgs>(args: Subset<T, LeaveAggregateArgs>): Prisma.PrismaPromise<GetLeaveAggregateType<T>>

    /**
     * Group by Leave.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LeaveGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeaveGroupByArgs['orderBy'] }
        : { orderBy?: LeaveGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LeaveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Leave model
   */
  readonly fields: LeaveFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Leave.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeaveClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reviewer<T extends Leave$reviewerArgs<ExtArgs> = {}>(args?: Subset<T, Leave$reviewerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    history<T extends Leave$historyArgs<ExtArgs> = {}>(args?: Subset<T, Leave$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Leave model
   */
  interface LeaveFieldRefs {
    readonly id: FieldRef<"Leave", 'String'>
    readonly userId: FieldRef<"Leave", 'String'>
    readonly type: FieldRef<"Leave", 'LeaveType'>
    readonly startDate: FieldRef<"Leave", 'DateTime'>
    readonly endDate: FieldRef<"Leave", 'DateTime'>
    readonly duration: FieldRef<"Leave", 'Int'>
    readonly reason: FieldRef<"Leave", 'String'>
    readonly status: FieldRef<"Leave", 'LeaveStatus'>
    readonly reviewedBy: FieldRef<"Leave", 'String'>
    readonly comment: FieldRef<"Leave", 'String'>
    readonly documentUrl: FieldRef<"Leave", 'String'>
    readonly createdAt: FieldRef<"Leave", 'DateTime'>
    readonly updatedAt: FieldRef<"Leave", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Leave findUnique
   */
  export type LeaveFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    /**
     * Filter, which Leave to fetch.
     */
    where: LeaveWhereUniqueInput
  }

  /**
   * Leave findUniqueOrThrow
   */
  export type LeaveFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    /**
     * Filter, which Leave to fetch.
     */
    where: LeaveWhereUniqueInput
  }

  /**
   * Leave findFirst
   */
  export type LeaveFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    /**
     * Filter, which Leave to fetch.
     */
    where?: LeaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leaves to fetch.
     */
    orderBy?: LeaveOrderByWithRelationInput | LeaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leaves.
     */
    cursor?: LeaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leaves.
     */
    distinct?: LeaveScalarFieldEnum | LeaveScalarFieldEnum[]
  }

  /**
   * Leave findFirstOrThrow
   */
  export type LeaveFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    /**
     * Filter, which Leave to fetch.
     */
    where?: LeaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leaves to fetch.
     */
    orderBy?: LeaveOrderByWithRelationInput | LeaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leaves.
     */
    cursor?: LeaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leaves.
     */
    distinct?: LeaveScalarFieldEnum | LeaveScalarFieldEnum[]
  }

  /**
   * Leave findMany
   */
  export type LeaveFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    /**
     * Filter, which Leaves to fetch.
     */
    where?: LeaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leaves to fetch.
     */
    orderBy?: LeaveOrderByWithRelationInput | LeaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Leaves.
     */
    cursor?: LeaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leaves.
     */
    skip?: number
    distinct?: LeaveScalarFieldEnum | LeaveScalarFieldEnum[]
  }

  /**
   * Leave create
   */
  export type LeaveCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    /**
     * The data needed to create a Leave.
     */
    data: XOR<LeaveCreateInput, LeaveUncheckedCreateInput>
  }

  /**
   * Leave createMany
   */
  export type LeaveCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Leaves.
     */
    data: LeaveCreateManyInput | LeaveCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Leave createManyAndReturn
   */
  export type LeaveCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * The data used to create many Leaves.
     */
    data: LeaveCreateManyInput | LeaveCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Leave update
   */
  export type LeaveUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    /**
     * The data needed to update a Leave.
     */
    data: XOR<LeaveUpdateInput, LeaveUncheckedUpdateInput>
    /**
     * Choose, which Leave to update.
     */
    where: LeaveWhereUniqueInput
  }

  /**
   * Leave updateMany
   */
  export type LeaveUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Leaves.
     */
    data: XOR<LeaveUpdateManyMutationInput, LeaveUncheckedUpdateManyInput>
    /**
     * Filter which Leaves to update
     */
    where?: LeaveWhereInput
    /**
     * Limit how many Leaves to update.
     */
    limit?: number
  }

  /**
   * Leave updateManyAndReturn
   */
  export type LeaveUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * The data used to update Leaves.
     */
    data: XOR<LeaveUpdateManyMutationInput, LeaveUncheckedUpdateManyInput>
    /**
     * Filter which Leaves to update
     */
    where?: LeaveWhereInput
    /**
     * Limit how many Leaves to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Leave upsert
   */
  export type LeaveUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    /**
     * The filter to search for the Leave to update in case it exists.
     */
    where: LeaveWhereUniqueInput
    /**
     * In case the Leave found by the `where` argument doesn't exist, create a new Leave with this data.
     */
    create: XOR<LeaveCreateInput, LeaveUncheckedCreateInput>
    /**
     * In case the Leave was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeaveUpdateInput, LeaveUncheckedUpdateInput>
  }

  /**
   * Leave delete
   */
  export type LeaveDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    /**
     * Filter which Leave to delete.
     */
    where: LeaveWhereUniqueInput
  }

  /**
   * Leave deleteMany
   */
  export type LeaveDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leaves to delete
     */
    where?: LeaveWhereInput
    /**
     * Limit how many Leaves to delete.
     */
    limit?: number
  }

  /**
   * Leave.reviewer
   */
  export type Leave$reviewerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Leave.history
   */
  export type Leave$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveHistory
     */
    select?: LeaveHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveHistory
     */
    omit?: LeaveHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveHistoryInclude<ExtArgs> | null
    where?: LeaveHistoryWhereInput
    orderBy?: LeaveHistoryOrderByWithRelationInput | LeaveHistoryOrderByWithRelationInput[]
    cursor?: LeaveHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaveHistoryScalarFieldEnum | LeaveHistoryScalarFieldEnum[]
  }

  /**
   * Leave without action
   */
  export type LeaveDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
  }


  /**
   * Model LeaveBalance
   */

  export type AggregateLeaveBalance = {
    _count: LeaveBalanceCountAggregateOutputType | null
    _avg: LeaveBalanceAvgAggregateOutputType | null
    _sum: LeaveBalanceSumAggregateOutputType | null
    _min: LeaveBalanceMinAggregateOutputType | null
    _max: LeaveBalanceMaxAggregateOutputType | null
  }

  export type LeaveBalanceAvgAggregateOutputType = {
    year: number | null
    total: number | null
    used: number | null
  }

  export type LeaveBalanceSumAggregateOutputType = {
    year: number | null
    total: number | null
    used: number | null
  }

  export type LeaveBalanceMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.LeaveType | null
    year: number | null
    total: number | null
    used: number | null
  }

  export type LeaveBalanceMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.LeaveType | null
    year: number | null
    total: number | null
    used: number | null
  }

  export type LeaveBalanceCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    year: number
    total: number
    used: number
    _all: number
  }


  export type LeaveBalanceAvgAggregateInputType = {
    year?: true
    total?: true
    used?: true
  }

  export type LeaveBalanceSumAggregateInputType = {
    year?: true
    total?: true
    used?: true
  }

  export type LeaveBalanceMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    year?: true
    total?: true
    used?: true
  }

  export type LeaveBalanceMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    year?: true
    total?: true
    used?: true
  }

  export type LeaveBalanceCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    year?: true
    total?: true
    used?: true
    _all?: true
  }

  export type LeaveBalanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeaveBalance to aggregate.
     */
    where?: LeaveBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveBalances to fetch.
     */
    orderBy?: LeaveBalanceOrderByWithRelationInput | LeaveBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeaveBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveBalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LeaveBalances
    **/
    _count?: true | LeaveBalanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeaveBalanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeaveBalanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeaveBalanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeaveBalanceMaxAggregateInputType
  }

  export type GetLeaveBalanceAggregateType<T extends LeaveBalanceAggregateArgs> = {
        [P in keyof T & keyof AggregateLeaveBalance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeaveBalance[P]>
      : GetScalarType<T[P], AggregateLeaveBalance[P]>
  }




  export type LeaveBalanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaveBalanceWhereInput
    orderBy?: LeaveBalanceOrderByWithAggregationInput | LeaveBalanceOrderByWithAggregationInput[]
    by: LeaveBalanceScalarFieldEnum[] | LeaveBalanceScalarFieldEnum
    having?: LeaveBalanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeaveBalanceCountAggregateInputType | true
    _avg?: LeaveBalanceAvgAggregateInputType
    _sum?: LeaveBalanceSumAggregateInputType
    _min?: LeaveBalanceMinAggregateInputType
    _max?: LeaveBalanceMaxAggregateInputType
  }

  export type LeaveBalanceGroupByOutputType = {
    id: string
    userId: string
    type: $Enums.LeaveType
    year: number
    total: number
    used: number
    _count: LeaveBalanceCountAggregateOutputType | null
    _avg: LeaveBalanceAvgAggregateOutputType | null
    _sum: LeaveBalanceSumAggregateOutputType | null
    _min: LeaveBalanceMinAggregateOutputType | null
    _max: LeaveBalanceMaxAggregateOutputType | null
  }

  type GetLeaveBalanceGroupByPayload<T extends LeaveBalanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeaveBalanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeaveBalanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeaveBalanceGroupByOutputType[P]>
            : GetScalarType<T[P], LeaveBalanceGroupByOutputType[P]>
        }
      >
    >


  export type LeaveBalanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    year?: boolean
    total?: boolean
    used?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leaveBalance"]>

  export type LeaveBalanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    year?: boolean
    total?: boolean
    used?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leaveBalance"]>

  export type LeaveBalanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    year?: boolean
    total?: boolean
    used?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leaveBalance"]>

  export type LeaveBalanceSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    year?: boolean
    total?: boolean
    used?: boolean
  }

  export type LeaveBalanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "year" | "total" | "used", ExtArgs["result"]["leaveBalance"]>
  export type LeaveBalanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LeaveBalanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LeaveBalanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LeaveBalancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LeaveBalance"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: $Enums.LeaveType
      year: number
      total: number
      used: number
    }, ExtArgs["result"]["leaveBalance"]>
    composites: {}
  }

  type LeaveBalanceGetPayload<S extends boolean | null | undefined | LeaveBalanceDefaultArgs> = $Result.GetResult<Prisma.$LeaveBalancePayload, S>

  type LeaveBalanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeaveBalanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeaveBalanceCountAggregateInputType | true
    }

  export interface LeaveBalanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LeaveBalance'], meta: { name: 'LeaveBalance' } }
    /**
     * Find zero or one LeaveBalance that matches the filter.
     * @param {LeaveBalanceFindUniqueArgs} args - Arguments to find a LeaveBalance
     * @example
     * // Get one LeaveBalance
     * const leaveBalance = await prisma.leaveBalance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeaveBalanceFindUniqueArgs>(args: SelectSubset<T, LeaveBalanceFindUniqueArgs<ExtArgs>>): Prisma__LeaveBalanceClient<$Result.GetResult<Prisma.$LeaveBalancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LeaveBalance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeaveBalanceFindUniqueOrThrowArgs} args - Arguments to find a LeaveBalance
     * @example
     * // Get one LeaveBalance
     * const leaveBalance = await prisma.leaveBalance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeaveBalanceFindUniqueOrThrowArgs>(args: SelectSubset<T, LeaveBalanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeaveBalanceClient<$Result.GetResult<Prisma.$LeaveBalancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeaveBalance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveBalanceFindFirstArgs} args - Arguments to find a LeaveBalance
     * @example
     * // Get one LeaveBalance
     * const leaveBalance = await prisma.leaveBalance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeaveBalanceFindFirstArgs>(args?: SelectSubset<T, LeaveBalanceFindFirstArgs<ExtArgs>>): Prisma__LeaveBalanceClient<$Result.GetResult<Prisma.$LeaveBalancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeaveBalance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveBalanceFindFirstOrThrowArgs} args - Arguments to find a LeaveBalance
     * @example
     * // Get one LeaveBalance
     * const leaveBalance = await prisma.leaveBalance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeaveBalanceFindFirstOrThrowArgs>(args?: SelectSubset<T, LeaveBalanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeaveBalanceClient<$Result.GetResult<Prisma.$LeaveBalancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LeaveBalances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveBalanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LeaveBalances
     * const leaveBalances = await prisma.leaveBalance.findMany()
     * 
     * // Get first 10 LeaveBalances
     * const leaveBalances = await prisma.leaveBalance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leaveBalanceWithIdOnly = await prisma.leaveBalance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeaveBalanceFindManyArgs>(args?: SelectSubset<T, LeaveBalanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveBalancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LeaveBalance.
     * @param {LeaveBalanceCreateArgs} args - Arguments to create a LeaveBalance.
     * @example
     * // Create one LeaveBalance
     * const LeaveBalance = await prisma.leaveBalance.create({
     *   data: {
     *     // ... data to create a LeaveBalance
     *   }
     * })
     * 
     */
    create<T extends LeaveBalanceCreateArgs>(args: SelectSubset<T, LeaveBalanceCreateArgs<ExtArgs>>): Prisma__LeaveBalanceClient<$Result.GetResult<Prisma.$LeaveBalancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LeaveBalances.
     * @param {LeaveBalanceCreateManyArgs} args - Arguments to create many LeaveBalances.
     * @example
     * // Create many LeaveBalances
     * const leaveBalance = await prisma.leaveBalance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeaveBalanceCreateManyArgs>(args?: SelectSubset<T, LeaveBalanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LeaveBalances and returns the data saved in the database.
     * @param {LeaveBalanceCreateManyAndReturnArgs} args - Arguments to create many LeaveBalances.
     * @example
     * // Create many LeaveBalances
     * const leaveBalance = await prisma.leaveBalance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LeaveBalances and only return the `id`
     * const leaveBalanceWithIdOnly = await prisma.leaveBalance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeaveBalanceCreateManyAndReturnArgs>(args?: SelectSubset<T, LeaveBalanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveBalancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LeaveBalance.
     * @param {LeaveBalanceDeleteArgs} args - Arguments to delete one LeaveBalance.
     * @example
     * // Delete one LeaveBalance
     * const LeaveBalance = await prisma.leaveBalance.delete({
     *   where: {
     *     // ... filter to delete one LeaveBalance
     *   }
     * })
     * 
     */
    delete<T extends LeaveBalanceDeleteArgs>(args: SelectSubset<T, LeaveBalanceDeleteArgs<ExtArgs>>): Prisma__LeaveBalanceClient<$Result.GetResult<Prisma.$LeaveBalancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LeaveBalance.
     * @param {LeaveBalanceUpdateArgs} args - Arguments to update one LeaveBalance.
     * @example
     * // Update one LeaveBalance
     * const leaveBalance = await prisma.leaveBalance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeaveBalanceUpdateArgs>(args: SelectSubset<T, LeaveBalanceUpdateArgs<ExtArgs>>): Prisma__LeaveBalanceClient<$Result.GetResult<Prisma.$LeaveBalancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LeaveBalances.
     * @param {LeaveBalanceDeleteManyArgs} args - Arguments to filter LeaveBalances to delete.
     * @example
     * // Delete a few LeaveBalances
     * const { count } = await prisma.leaveBalance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeaveBalanceDeleteManyArgs>(args?: SelectSubset<T, LeaveBalanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeaveBalances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveBalanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LeaveBalances
     * const leaveBalance = await prisma.leaveBalance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeaveBalanceUpdateManyArgs>(args: SelectSubset<T, LeaveBalanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeaveBalances and returns the data updated in the database.
     * @param {LeaveBalanceUpdateManyAndReturnArgs} args - Arguments to update many LeaveBalances.
     * @example
     * // Update many LeaveBalances
     * const leaveBalance = await prisma.leaveBalance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LeaveBalances and only return the `id`
     * const leaveBalanceWithIdOnly = await prisma.leaveBalance.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LeaveBalanceUpdateManyAndReturnArgs>(args: SelectSubset<T, LeaveBalanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveBalancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LeaveBalance.
     * @param {LeaveBalanceUpsertArgs} args - Arguments to update or create a LeaveBalance.
     * @example
     * // Update or create a LeaveBalance
     * const leaveBalance = await prisma.leaveBalance.upsert({
     *   create: {
     *     // ... data to create a LeaveBalance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LeaveBalance we want to update
     *   }
     * })
     */
    upsert<T extends LeaveBalanceUpsertArgs>(args: SelectSubset<T, LeaveBalanceUpsertArgs<ExtArgs>>): Prisma__LeaveBalanceClient<$Result.GetResult<Prisma.$LeaveBalancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LeaveBalances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveBalanceCountArgs} args - Arguments to filter LeaveBalances to count.
     * @example
     * // Count the number of LeaveBalances
     * const count = await prisma.leaveBalance.count({
     *   where: {
     *     // ... the filter for the LeaveBalances we want to count
     *   }
     * })
    **/
    count<T extends LeaveBalanceCountArgs>(
      args?: Subset<T, LeaveBalanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeaveBalanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LeaveBalance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveBalanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeaveBalanceAggregateArgs>(args: Subset<T, LeaveBalanceAggregateArgs>): Prisma.PrismaPromise<GetLeaveBalanceAggregateType<T>>

    /**
     * Group by LeaveBalance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveBalanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LeaveBalanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeaveBalanceGroupByArgs['orderBy'] }
        : { orderBy?: LeaveBalanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LeaveBalanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaveBalanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LeaveBalance model
   */
  readonly fields: LeaveBalanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LeaveBalance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeaveBalanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LeaveBalance model
   */
  interface LeaveBalanceFieldRefs {
    readonly id: FieldRef<"LeaveBalance", 'String'>
    readonly userId: FieldRef<"LeaveBalance", 'String'>
    readonly type: FieldRef<"LeaveBalance", 'LeaveType'>
    readonly year: FieldRef<"LeaveBalance", 'Int'>
    readonly total: FieldRef<"LeaveBalance", 'Int'>
    readonly used: FieldRef<"LeaveBalance", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * LeaveBalance findUnique
   */
  export type LeaveBalanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveBalance
     */
    select?: LeaveBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveBalance
     */
    omit?: LeaveBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveBalanceInclude<ExtArgs> | null
    /**
     * Filter, which LeaveBalance to fetch.
     */
    where: LeaveBalanceWhereUniqueInput
  }

  /**
   * LeaveBalance findUniqueOrThrow
   */
  export type LeaveBalanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveBalance
     */
    select?: LeaveBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveBalance
     */
    omit?: LeaveBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveBalanceInclude<ExtArgs> | null
    /**
     * Filter, which LeaveBalance to fetch.
     */
    where: LeaveBalanceWhereUniqueInput
  }

  /**
   * LeaveBalance findFirst
   */
  export type LeaveBalanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveBalance
     */
    select?: LeaveBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveBalance
     */
    omit?: LeaveBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveBalanceInclude<ExtArgs> | null
    /**
     * Filter, which LeaveBalance to fetch.
     */
    where?: LeaveBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveBalances to fetch.
     */
    orderBy?: LeaveBalanceOrderByWithRelationInput | LeaveBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeaveBalances.
     */
    cursor?: LeaveBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveBalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaveBalances.
     */
    distinct?: LeaveBalanceScalarFieldEnum | LeaveBalanceScalarFieldEnum[]
  }

  /**
   * LeaveBalance findFirstOrThrow
   */
  export type LeaveBalanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveBalance
     */
    select?: LeaveBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveBalance
     */
    omit?: LeaveBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveBalanceInclude<ExtArgs> | null
    /**
     * Filter, which LeaveBalance to fetch.
     */
    where?: LeaveBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveBalances to fetch.
     */
    orderBy?: LeaveBalanceOrderByWithRelationInput | LeaveBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeaveBalances.
     */
    cursor?: LeaveBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveBalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaveBalances.
     */
    distinct?: LeaveBalanceScalarFieldEnum | LeaveBalanceScalarFieldEnum[]
  }

  /**
   * LeaveBalance findMany
   */
  export type LeaveBalanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveBalance
     */
    select?: LeaveBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveBalance
     */
    omit?: LeaveBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveBalanceInclude<ExtArgs> | null
    /**
     * Filter, which LeaveBalances to fetch.
     */
    where?: LeaveBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveBalances to fetch.
     */
    orderBy?: LeaveBalanceOrderByWithRelationInput | LeaveBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LeaveBalances.
     */
    cursor?: LeaveBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveBalances.
     */
    skip?: number
    distinct?: LeaveBalanceScalarFieldEnum | LeaveBalanceScalarFieldEnum[]
  }

  /**
   * LeaveBalance create
   */
  export type LeaveBalanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveBalance
     */
    select?: LeaveBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveBalance
     */
    omit?: LeaveBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveBalanceInclude<ExtArgs> | null
    /**
     * The data needed to create a LeaveBalance.
     */
    data: XOR<LeaveBalanceCreateInput, LeaveBalanceUncheckedCreateInput>
  }

  /**
   * LeaveBalance createMany
   */
  export type LeaveBalanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LeaveBalances.
     */
    data: LeaveBalanceCreateManyInput | LeaveBalanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LeaveBalance createManyAndReturn
   */
  export type LeaveBalanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveBalance
     */
    select?: LeaveBalanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveBalance
     */
    omit?: LeaveBalanceOmit<ExtArgs> | null
    /**
     * The data used to create many LeaveBalances.
     */
    data: LeaveBalanceCreateManyInput | LeaveBalanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveBalanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeaveBalance update
   */
  export type LeaveBalanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveBalance
     */
    select?: LeaveBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveBalance
     */
    omit?: LeaveBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveBalanceInclude<ExtArgs> | null
    /**
     * The data needed to update a LeaveBalance.
     */
    data: XOR<LeaveBalanceUpdateInput, LeaveBalanceUncheckedUpdateInput>
    /**
     * Choose, which LeaveBalance to update.
     */
    where: LeaveBalanceWhereUniqueInput
  }

  /**
   * LeaveBalance updateMany
   */
  export type LeaveBalanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LeaveBalances.
     */
    data: XOR<LeaveBalanceUpdateManyMutationInput, LeaveBalanceUncheckedUpdateManyInput>
    /**
     * Filter which LeaveBalances to update
     */
    where?: LeaveBalanceWhereInput
    /**
     * Limit how many LeaveBalances to update.
     */
    limit?: number
  }

  /**
   * LeaveBalance updateManyAndReturn
   */
  export type LeaveBalanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveBalance
     */
    select?: LeaveBalanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveBalance
     */
    omit?: LeaveBalanceOmit<ExtArgs> | null
    /**
     * The data used to update LeaveBalances.
     */
    data: XOR<LeaveBalanceUpdateManyMutationInput, LeaveBalanceUncheckedUpdateManyInput>
    /**
     * Filter which LeaveBalances to update
     */
    where?: LeaveBalanceWhereInput
    /**
     * Limit how many LeaveBalances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveBalanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeaveBalance upsert
   */
  export type LeaveBalanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveBalance
     */
    select?: LeaveBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveBalance
     */
    omit?: LeaveBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveBalanceInclude<ExtArgs> | null
    /**
     * The filter to search for the LeaveBalance to update in case it exists.
     */
    where: LeaveBalanceWhereUniqueInput
    /**
     * In case the LeaveBalance found by the `where` argument doesn't exist, create a new LeaveBalance with this data.
     */
    create: XOR<LeaveBalanceCreateInput, LeaveBalanceUncheckedCreateInput>
    /**
     * In case the LeaveBalance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeaveBalanceUpdateInput, LeaveBalanceUncheckedUpdateInput>
  }

  /**
   * LeaveBalance delete
   */
  export type LeaveBalanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveBalance
     */
    select?: LeaveBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveBalance
     */
    omit?: LeaveBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveBalanceInclude<ExtArgs> | null
    /**
     * Filter which LeaveBalance to delete.
     */
    where: LeaveBalanceWhereUniqueInput
  }

  /**
   * LeaveBalance deleteMany
   */
  export type LeaveBalanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeaveBalances to delete
     */
    where?: LeaveBalanceWhereInput
    /**
     * Limit how many LeaveBalances to delete.
     */
    limit?: number
  }

  /**
   * LeaveBalance without action
   */
  export type LeaveBalanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveBalance
     */
    select?: LeaveBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveBalance
     */
    omit?: LeaveBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveBalanceInclude<ExtArgs> | null
  }


  /**
   * Model LeaveHistory
   */

  export type AggregateLeaveHistory = {
    _count: LeaveHistoryCountAggregateOutputType | null
    _min: LeaveHistoryMinAggregateOutputType | null
    _max: LeaveHistoryMaxAggregateOutputType | null
  }

  export type LeaveHistoryMinAggregateOutputType = {
    id: string | null
    leaveId: string | null
    action: $Enums.HistoryAction | null
    byUserId: string | null
    createdAt: Date | null
    note: string | null
  }

  export type LeaveHistoryMaxAggregateOutputType = {
    id: string | null
    leaveId: string | null
    action: $Enums.HistoryAction | null
    byUserId: string | null
    createdAt: Date | null
    note: string | null
  }

  export type LeaveHistoryCountAggregateOutputType = {
    id: number
    leaveId: number
    action: number
    byUserId: number
    createdAt: number
    note: number
    _all: number
  }


  export type LeaveHistoryMinAggregateInputType = {
    id?: true
    leaveId?: true
    action?: true
    byUserId?: true
    createdAt?: true
    note?: true
  }

  export type LeaveHistoryMaxAggregateInputType = {
    id?: true
    leaveId?: true
    action?: true
    byUserId?: true
    createdAt?: true
    note?: true
  }

  export type LeaveHistoryCountAggregateInputType = {
    id?: true
    leaveId?: true
    action?: true
    byUserId?: true
    createdAt?: true
    note?: true
    _all?: true
  }

  export type LeaveHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeaveHistory to aggregate.
     */
    where?: LeaveHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveHistories to fetch.
     */
    orderBy?: LeaveHistoryOrderByWithRelationInput | LeaveHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeaveHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LeaveHistories
    **/
    _count?: true | LeaveHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeaveHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeaveHistoryMaxAggregateInputType
  }

  export type GetLeaveHistoryAggregateType<T extends LeaveHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateLeaveHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeaveHistory[P]>
      : GetScalarType<T[P], AggregateLeaveHistory[P]>
  }




  export type LeaveHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaveHistoryWhereInput
    orderBy?: LeaveHistoryOrderByWithAggregationInput | LeaveHistoryOrderByWithAggregationInput[]
    by: LeaveHistoryScalarFieldEnum[] | LeaveHistoryScalarFieldEnum
    having?: LeaveHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeaveHistoryCountAggregateInputType | true
    _min?: LeaveHistoryMinAggregateInputType
    _max?: LeaveHistoryMaxAggregateInputType
  }

  export type LeaveHistoryGroupByOutputType = {
    id: string
    leaveId: string
    action: $Enums.HistoryAction
    byUserId: string
    createdAt: Date
    note: string | null
    _count: LeaveHistoryCountAggregateOutputType | null
    _min: LeaveHistoryMinAggregateOutputType | null
    _max: LeaveHistoryMaxAggregateOutputType | null
  }

  type GetLeaveHistoryGroupByPayload<T extends LeaveHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeaveHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeaveHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeaveHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], LeaveHistoryGroupByOutputType[P]>
        }
      >
    >


  export type LeaveHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leaveId?: boolean
    action?: boolean
    byUserId?: boolean
    createdAt?: boolean
    note?: boolean
    leave?: boolean | LeaveDefaultArgs<ExtArgs>
    byUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leaveHistory"]>

  export type LeaveHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leaveId?: boolean
    action?: boolean
    byUserId?: boolean
    createdAt?: boolean
    note?: boolean
    leave?: boolean | LeaveDefaultArgs<ExtArgs>
    byUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leaveHistory"]>

  export type LeaveHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leaveId?: boolean
    action?: boolean
    byUserId?: boolean
    createdAt?: boolean
    note?: boolean
    leave?: boolean | LeaveDefaultArgs<ExtArgs>
    byUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leaveHistory"]>

  export type LeaveHistorySelectScalar = {
    id?: boolean
    leaveId?: boolean
    action?: boolean
    byUserId?: boolean
    createdAt?: boolean
    note?: boolean
  }

  export type LeaveHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "leaveId" | "action" | "byUserId" | "createdAt" | "note", ExtArgs["result"]["leaveHistory"]>
  export type LeaveHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leave?: boolean | LeaveDefaultArgs<ExtArgs>
    byUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LeaveHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leave?: boolean | LeaveDefaultArgs<ExtArgs>
    byUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LeaveHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leave?: boolean | LeaveDefaultArgs<ExtArgs>
    byUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LeaveHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LeaveHistory"
    objects: {
      leave: Prisma.$LeavePayload<ExtArgs>
      byUser: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      leaveId: string
      action: $Enums.HistoryAction
      byUserId: string
      createdAt: Date
      note: string | null
    }, ExtArgs["result"]["leaveHistory"]>
    composites: {}
  }

  type LeaveHistoryGetPayload<S extends boolean | null | undefined | LeaveHistoryDefaultArgs> = $Result.GetResult<Prisma.$LeaveHistoryPayload, S>

  type LeaveHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeaveHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeaveHistoryCountAggregateInputType | true
    }

  export interface LeaveHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LeaveHistory'], meta: { name: 'LeaveHistory' } }
    /**
     * Find zero or one LeaveHistory that matches the filter.
     * @param {LeaveHistoryFindUniqueArgs} args - Arguments to find a LeaveHistory
     * @example
     * // Get one LeaveHistory
     * const leaveHistory = await prisma.leaveHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeaveHistoryFindUniqueArgs>(args: SelectSubset<T, LeaveHistoryFindUniqueArgs<ExtArgs>>): Prisma__LeaveHistoryClient<$Result.GetResult<Prisma.$LeaveHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LeaveHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeaveHistoryFindUniqueOrThrowArgs} args - Arguments to find a LeaveHistory
     * @example
     * // Get one LeaveHistory
     * const leaveHistory = await prisma.leaveHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeaveHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, LeaveHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeaveHistoryClient<$Result.GetResult<Prisma.$LeaveHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeaveHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveHistoryFindFirstArgs} args - Arguments to find a LeaveHistory
     * @example
     * // Get one LeaveHistory
     * const leaveHistory = await prisma.leaveHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeaveHistoryFindFirstArgs>(args?: SelectSubset<T, LeaveHistoryFindFirstArgs<ExtArgs>>): Prisma__LeaveHistoryClient<$Result.GetResult<Prisma.$LeaveHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeaveHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveHistoryFindFirstOrThrowArgs} args - Arguments to find a LeaveHistory
     * @example
     * // Get one LeaveHistory
     * const leaveHistory = await prisma.leaveHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeaveHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, LeaveHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeaveHistoryClient<$Result.GetResult<Prisma.$LeaveHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LeaveHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LeaveHistories
     * const leaveHistories = await prisma.leaveHistory.findMany()
     * 
     * // Get first 10 LeaveHistories
     * const leaveHistories = await prisma.leaveHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leaveHistoryWithIdOnly = await prisma.leaveHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeaveHistoryFindManyArgs>(args?: SelectSubset<T, LeaveHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LeaveHistory.
     * @param {LeaveHistoryCreateArgs} args - Arguments to create a LeaveHistory.
     * @example
     * // Create one LeaveHistory
     * const LeaveHistory = await prisma.leaveHistory.create({
     *   data: {
     *     // ... data to create a LeaveHistory
     *   }
     * })
     * 
     */
    create<T extends LeaveHistoryCreateArgs>(args: SelectSubset<T, LeaveHistoryCreateArgs<ExtArgs>>): Prisma__LeaveHistoryClient<$Result.GetResult<Prisma.$LeaveHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LeaveHistories.
     * @param {LeaveHistoryCreateManyArgs} args - Arguments to create many LeaveHistories.
     * @example
     * // Create many LeaveHistories
     * const leaveHistory = await prisma.leaveHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeaveHistoryCreateManyArgs>(args?: SelectSubset<T, LeaveHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LeaveHistories and returns the data saved in the database.
     * @param {LeaveHistoryCreateManyAndReturnArgs} args - Arguments to create many LeaveHistories.
     * @example
     * // Create many LeaveHistories
     * const leaveHistory = await prisma.leaveHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LeaveHistories and only return the `id`
     * const leaveHistoryWithIdOnly = await prisma.leaveHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeaveHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, LeaveHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LeaveHistory.
     * @param {LeaveHistoryDeleteArgs} args - Arguments to delete one LeaveHistory.
     * @example
     * // Delete one LeaveHistory
     * const LeaveHistory = await prisma.leaveHistory.delete({
     *   where: {
     *     // ... filter to delete one LeaveHistory
     *   }
     * })
     * 
     */
    delete<T extends LeaveHistoryDeleteArgs>(args: SelectSubset<T, LeaveHistoryDeleteArgs<ExtArgs>>): Prisma__LeaveHistoryClient<$Result.GetResult<Prisma.$LeaveHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LeaveHistory.
     * @param {LeaveHistoryUpdateArgs} args - Arguments to update one LeaveHistory.
     * @example
     * // Update one LeaveHistory
     * const leaveHistory = await prisma.leaveHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeaveHistoryUpdateArgs>(args: SelectSubset<T, LeaveHistoryUpdateArgs<ExtArgs>>): Prisma__LeaveHistoryClient<$Result.GetResult<Prisma.$LeaveHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LeaveHistories.
     * @param {LeaveHistoryDeleteManyArgs} args - Arguments to filter LeaveHistories to delete.
     * @example
     * // Delete a few LeaveHistories
     * const { count } = await prisma.leaveHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeaveHistoryDeleteManyArgs>(args?: SelectSubset<T, LeaveHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeaveHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LeaveHistories
     * const leaveHistory = await prisma.leaveHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeaveHistoryUpdateManyArgs>(args: SelectSubset<T, LeaveHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeaveHistories and returns the data updated in the database.
     * @param {LeaveHistoryUpdateManyAndReturnArgs} args - Arguments to update many LeaveHistories.
     * @example
     * // Update many LeaveHistories
     * const leaveHistory = await prisma.leaveHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LeaveHistories and only return the `id`
     * const leaveHistoryWithIdOnly = await prisma.leaveHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LeaveHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, LeaveHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LeaveHistory.
     * @param {LeaveHistoryUpsertArgs} args - Arguments to update or create a LeaveHistory.
     * @example
     * // Update or create a LeaveHistory
     * const leaveHistory = await prisma.leaveHistory.upsert({
     *   create: {
     *     // ... data to create a LeaveHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LeaveHistory we want to update
     *   }
     * })
     */
    upsert<T extends LeaveHistoryUpsertArgs>(args: SelectSubset<T, LeaveHistoryUpsertArgs<ExtArgs>>): Prisma__LeaveHistoryClient<$Result.GetResult<Prisma.$LeaveHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LeaveHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveHistoryCountArgs} args - Arguments to filter LeaveHistories to count.
     * @example
     * // Count the number of LeaveHistories
     * const count = await prisma.leaveHistory.count({
     *   where: {
     *     // ... the filter for the LeaveHistories we want to count
     *   }
     * })
    **/
    count<T extends LeaveHistoryCountArgs>(
      args?: Subset<T, LeaveHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeaveHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LeaveHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeaveHistoryAggregateArgs>(args: Subset<T, LeaveHistoryAggregateArgs>): Prisma.PrismaPromise<GetLeaveHistoryAggregateType<T>>

    /**
     * Group by LeaveHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LeaveHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeaveHistoryGroupByArgs['orderBy'] }
        : { orderBy?: LeaveHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LeaveHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaveHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LeaveHistory model
   */
  readonly fields: LeaveHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LeaveHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeaveHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    leave<T extends LeaveDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LeaveDefaultArgs<ExtArgs>>): Prisma__LeaveClient<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    byUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LeaveHistory model
   */
  interface LeaveHistoryFieldRefs {
    readonly id: FieldRef<"LeaveHistory", 'String'>
    readonly leaveId: FieldRef<"LeaveHistory", 'String'>
    readonly action: FieldRef<"LeaveHistory", 'HistoryAction'>
    readonly byUserId: FieldRef<"LeaveHistory", 'String'>
    readonly createdAt: FieldRef<"LeaveHistory", 'DateTime'>
    readonly note: FieldRef<"LeaveHistory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LeaveHistory findUnique
   */
  export type LeaveHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveHistory
     */
    select?: LeaveHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveHistory
     */
    omit?: LeaveHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveHistoryInclude<ExtArgs> | null
    /**
     * Filter, which LeaveHistory to fetch.
     */
    where: LeaveHistoryWhereUniqueInput
  }

  /**
   * LeaveHistory findUniqueOrThrow
   */
  export type LeaveHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveHistory
     */
    select?: LeaveHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveHistory
     */
    omit?: LeaveHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveHistoryInclude<ExtArgs> | null
    /**
     * Filter, which LeaveHistory to fetch.
     */
    where: LeaveHistoryWhereUniqueInput
  }

  /**
   * LeaveHistory findFirst
   */
  export type LeaveHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveHistory
     */
    select?: LeaveHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveHistory
     */
    omit?: LeaveHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveHistoryInclude<ExtArgs> | null
    /**
     * Filter, which LeaveHistory to fetch.
     */
    where?: LeaveHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveHistories to fetch.
     */
    orderBy?: LeaveHistoryOrderByWithRelationInput | LeaveHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeaveHistories.
     */
    cursor?: LeaveHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaveHistories.
     */
    distinct?: LeaveHistoryScalarFieldEnum | LeaveHistoryScalarFieldEnum[]
  }

  /**
   * LeaveHistory findFirstOrThrow
   */
  export type LeaveHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveHistory
     */
    select?: LeaveHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveHistory
     */
    omit?: LeaveHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveHistoryInclude<ExtArgs> | null
    /**
     * Filter, which LeaveHistory to fetch.
     */
    where?: LeaveHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveHistories to fetch.
     */
    orderBy?: LeaveHistoryOrderByWithRelationInput | LeaveHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeaveHistories.
     */
    cursor?: LeaveHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaveHistories.
     */
    distinct?: LeaveHistoryScalarFieldEnum | LeaveHistoryScalarFieldEnum[]
  }

  /**
   * LeaveHistory findMany
   */
  export type LeaveHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveHistory
     */
    select?: LeaveHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveHistory
     */
    omit?: LeaveHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveHistoryInclude<ExtArgs> | null
    /**
     * Filter, which LeaveHistories to fetch.
     */
    where?: LeaveHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveHistories to fetch.
     */
    orderBy?: LeaveHistoryOrderByWithRelationInput | LeaveHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LeaveHistories.
     */
    cursor?: LeaveHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveHistories.
     */
    skip?: number
    distinct?: LeaveHistoryScalarFieldEnum | LeaveHistoryScalarFieldEnum[]
  }

  /**
   * LeaveHistory create
   */
  export type LeaveHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveHistory
     */
    select?: LeaveHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveHistory
     */
    omit?: LeaveHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a LeaveHistory.
     */
    data: XOR<LeaveHistoryCreateInput, LeaveHistoryUncheckedCreateInput>
  }

  /**
   * LeaveHistory createMany
   */
  export type LeaveHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LeaveHistories.
     */
    data: LeaveHistoryCreateManyInput | LeaveHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LeaveHistory createManyAndReturn
   */
  export type LeaveHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveHistory
     */
    select?: LeaveHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveHistory
     */
    omit?: LeaveHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many LeaveHistories.
     */
    data: LeaveHistoryCreateManyInput | LeaveHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeaveHistory update
   */
  export type LeaveHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveHistory
     */
    select?: LeaveHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveHistory
     */
    omit?: LeaveHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a LeaveHistory.
     */
    data: XOR<LeaveHistoryUpdateInput, LeaveHistoryUncheckedUpdateInput>
    /**
     * Choose, which LeaveHistory to update.
     */
    where: LeaveHistoryWhereUniqueInput
  }

  /**
   * LeaveHistory updateMany
   */
  export type LeaveHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LeaveHistories.
     */
    data: XOR<LeaveHistoryUpdateManyMutationInput, LeaveHistoryUncheckedUpdateManyInput>
    /**
     * Filter which LeaveHistories to update
     */
    where?: LeaveHistoryWhereInput
    /**
     * Limit how many LeaveHistories to update.
     */
    limit?: number
  }

  /**
   * LeaveHistory updateManyAndReturn
   */
  export type LeaveHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveHistory
     */
    select?: LeaveHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveHistory
     */
    omit?: LeaveHistoryOmit<ExtArgs> | null
    /**
     * The data used to update LeaveHistories.
     */
    data: XOR<LeaveHistoryUpdateManyMutationInput, LeaveHistoryUncheckedUpdateManyInput>
    /**
     * Filter which LeaveHistories to update
     */
    where?: LeaveHistoryWhereInput
    /**
     * Limit how many LeaveHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeaveHistory upsert
   */
  export type LeaveHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveHistory
     */
    select?: LeaveHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveHistory
     */
    omit?: LeaveHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the LeaveHistory to update in case it exists.
     */
    where: LeaveHistoryWhereUniqueInput
    /**
     * In case the LeaveHistory found by the `where` argument doesn't exist, create a new LeaveHistory with this data.
     */
    create: XOR<LeaveHistoryCreateInput, LeaveHistoryUncheckedCreateInput>
    /**
     * In case the LeaveHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeaveHistoryUpdateInput, LeaveHistoryUncheckedUpdateInput>
  }

  /**
   * LeaveHistory delete
   */
  export type LeaveHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveHistory
     */
    select?: LeaveHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveHistory
     */
    omit?: LeaveHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveHistoryInclude<ExtArgs> | null
    /**
     * Filter which LeaveHistory to delete.
     */
    where: LeaveHistoryWhereUniqueInput
  }

  /**
   * LeaveHistory deleteMany
   */
  export type LeaveHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeaveHistories to delete
     */
    where?: LeaveHistoryWhereInput
    /**
     * Limit how many LeaveHistories to delete.
     */
    limit?: number
  }

  /**
   * LeaveHistory without action
   */
  export type LeaveHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveHistory
     */
    select?: LeaveHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveHistory
     */
    omit?: LeaveHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveHistoryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    matricule: 'matricule',
    password: 'password',
    verificationCode: 'verificationCode',
    verificationExpiration: 'verificationExpiration',
    resetToken: 'resetToken',
    resetTokenExpiration: 'resetTokenExpiration',
    isVerified: 'isVerified',
    lastLogin: 'lastLogin',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const LeaveScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    startDate: 'startDate',
    endDate: 'endDate',
    duration: 'duration',
    reason: 'reason',
    status: 'status',
    reviewedBy: 'reviewedBy',
    comment: 'comment',
    documentUrl: 'documentUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LeaveScalarFieldEnum = (typeof LeaveScalarFieldEnum)[keyof typeof LeaveScalarFieldEnum]


  export const LeaveBalanceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    year: 'year',
    total: 'total',
    used: 'used'
  };

  export type LeaveBalanceScalarFieldEnum = (typeof LeaveBalanceScalarFieldEnum)[keyof typeof LeaveBalanceScalarFieldEnum]


  export const LeaveHistoryScalarFieldEnum: {
    id: 'id',
    leaveId: 'leaveId',
    action: 'action',
    byUserId: 'byUserId',
    createdAt: 'createdAt',
    note: 'note'
  };

  export type LeaveHistoryScalarFieldEnum = (typeof LeaveHistoryScalarFieldEnum)[keyof typeof LeaveHistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'LeaveType'
   */
  export type EnumLeaveTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeaveType'>
    


  /**
   * Reference to a field of type 'LeaveType[]'
   */
  export type ListEnumLeaveTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeaveType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'LeaveStatus'
   */
  export type EnumLeaveStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeaveStatus'>
    


  /**
   * Reference to a field of type 'LeaveStatus[]'
   */
  export type ListEnumLeaveStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeaveStatus[]'>
    


  /**
   * Reference to a field of type 'HistoryAction'
   */
  export type EnumHistoryActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HistoryAction'>
    


  /**
   * Reference to a field of type 'HistoryAction[]'
   */
  export type ListEnumHistoryActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HistoryAction[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    matricule?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    verificationCode?: StringNullableFilter<"User"> | string | null
    verificationExpiration?: DateTimeNullableFilter<"User"> | Date | string | null
    resetToken?: StringNullableFilter<"User"> | string | null
    resetTokenExpiration?: DateTimeNullableFilter<"User"> | Date | string | null
    isVerified?: BoolFilter<"User"> | boolean
    lastLogin?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    leaves?: LeaveListRelationFilter
    balances?: LeaveBalanceListRelationFilter
    reviews?: LeaveListRelationFilter
    LeaveHistory?: LeaveHistoryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    matricule?: SortOrder
    password?: SortOrder
    verificationCode?: SortOrderInput | SortOrder
    verificationExpiration?: SortOrderInput | SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiration?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    lastLogin?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    leaves?: LeaveOrderByRelationAggregateInput
    balances?: LeaveBalanceOrderByRelationAggregateInput
    reviews?: LeaveOrderByRelationAggregateInput
    LeaveHistory?: LeaveHistoryOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    matricule?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    verificationCode?: StringNullableFilter<"User"> | string | null
    verificationExpiration?: DateTimeNullableFilter<"User"> | Date | string | null
    resetToken?: StringNullableFilter<"User"> | string | null
    resetTokenExpiration?: DateTimeNullableFilter<"User"> | Date | string | null
    isVerified?: BoolFilter<"User"> | boolean
    lastLogin?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    leaves?: LeaveListRelationFilter
    balances?: LeaveBalanceListRelationFilter
    reviews?: LeaveListRelationFilter
    LeaveHistory?: LeaveHistoryListRelationFilter
  }, "id" | "email" | "matricule">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    matricule?: SortOrder
    password?: SortOrder
    verificationCode?: SortOrderInput | SortOrder
    verificationExpiration?: SortOrderInput | SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiration?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    lastLogin?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    matricule?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    verificationCode?: StringNullableWithAggregatesFilter<"User"> | string | null
    verificationExpiration?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    resetToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetTokenExpiration?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    lastLogin?: DateTimeWithAggregatesFilter<"User"> | Date | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type LeaveWhereInput = {
    AND?: LeaveWhereInput | LeaveWhereInput[]
    OR?: LeaveWhereInput[]
    NOT?: LeaveWhereInput | LeaveWhereInput[]
    id?: UuidFilter<"Leave"> | string
    userId?: UuidFilter<"Leave"> | string
    type?: EnumLeaveTypeFilter<"Leave"> | $Enums.LeaveType
    startDate?: DateTimeFilter<"Leave"> | Date | string
    endDate?: DateTimeFilter<"Leave"> | Date | string
    duration?: IntFilter<"Leave"> | number
    reason?: StringFilter<"Leave"> | string
    status?: EnumLeaveStatusFilter<"Leave"> | $Enums.LeaveStatus
    reviewedBy?: UuidNullableFilter<"Leave"> | string | null
    comment?: StringNullableFilter<"Leave"> | string | null
    documentUrl?: StringNullableFilter<"Leave"> | string | null
    createdAt?: DateTimeFilter<"Leave"> | Date | string
    updatedAt?: DateTimeFilter<"Leave"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    reviewer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    history?: LeaveHistoryListRelationFilter
  }

  export type LeaveOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    duration?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    reviewedBy?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    documentUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    reviewer?: UserOrderByWithRelationInput
    history?: LeaveHistoryOrderByRelationAggregateInput
  }

  export type LeaveWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LeaveWhereInput | LeaveWhereInput[]
    OR?: LeaveWhereInput[]
    NOT?: LeaveWhereInput | LeaveWhereInput[]
    userId?: UuidFilter<"Leave"> | string
    type?: EnumLeaveTypeFilter<"Leave"> | $Enums.LeaveType
    startDate?: DateTimeFilter<"Leave"> | Date | string
    endDate?: DateTimeFilter<"Leave"> | Date | string
    duration?: IntFilter<"Leave"> | number
    reason?: StringFilter<"Leave"> | string
    status?: EnumLeaveStatusFilter<"Leave"> | $Enums.LeaveStatus
    reviewedBy?: UuidNullableFilter<"Leave"> | string | null
    comment?: StringNullableFilter<"Leave"> | string | null
    documentUrl?: StringNullableFilter<"Leave"> | string | null
    createdAt?: DateTimeFilter<"Leave"> | Date | string
    updatedAt?: DateTimeFilter<"Leave"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    reviewer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    history?: LeaveHistoryListRelationFilter
  }, "id">

  export type LeaveOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    duration?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    reviewedBy?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    documentUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LeaveCountOrderByAggregateInput
    _avg?: LeaveAvgOrderByAggregateInput
    _max?: LeaveMaxOrderByAggregateInput
    _min?: LeaveMinOrderByAggregateInput
    _sum?: LeaveSumOrderByAggregateInput
  }

  export type LeaveScalarWhereWithAggregatesInput = {
    AND?: LeaveScalarWhereWithAggregatesInput | LeaveScalarWhereWithAggregatesInput[]
    OR?: LeaveScalarWhereWithAggregatesInput[]
    NOT?: LeaveScalarWhereWithAggregatesInput | LeaveScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Leave"> | string
    userId?: UuidWithAggregatesFilter<"Leave"> | string
    type?: EnumLeaveTypeWithAggregatesFilter<"Leave"> | $Enums.LeaveType
    startDate?: DateTimeWithAggregatesFilter<"Leave"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Leave"> | Date | string
    duration?: IntWithAggregatesFilter<"Leave"> | number
    reason?: StringWithAggregatesFilter<"Leave"> | string
    status?: EnumLeaveStatusWithAggregatesFilter<"Leave"> | $Enums.LeaveStatus
    reviewedBy?: UuidNullableWithAggregatesFilter<"Leave"> | string | null
    comment?: StringNullableWithAggregatesFilter<"Leave"> | string | null
    documentUrl?: StringNullableWithAggregatesFilter<"Leave"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Leave"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Leave"> | Date | string
  }

  export type LeaveBalanceWhereInput = {
    AND?: LeaveBalanceWhereInput | LeaveBalanceWhereInput[]
    OR?: LeaveBalanceWhereInput[]
    NOT?: LeaveBalanceWhereInput | LeaveBalanceWhereInput[]
    id?: UuidFilter<"LeaveBalance"> | string
    userId?: UuidFilter<"LeaveBalance"> | string
    type?: EnumLeaveTypeFilter<"LeaveBalance"> | $Enums.LeaveType
    year?: IntFilter<"LeaveBalance"> | number
    total?: IntFilter<"LeaveBalance"> | number
    used?: IntFilter<"LeaveBalance"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LeaveBalanceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    year?: SortOrder
    total?: SortOrder
    used?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type LeaveBalanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LeaveBalanceWhereInput | LeaveBalanceWhereInput[]
    OR?: LeaveBalanceWhereInput[]
    NOT?: LeaveBalanceWhereInput | LeaveBalanceWhereInput[]
    userId?: UuidFilter<"LeaveBalance"> | string
    type?: EnumLeaveTypeFilter<"LeaveBalance"> | $Enums.LeaveType
    year?: IntFilter<"LeaveBalance"> | number
    total?: IntFilter<"LeaveBalance"> | number
    used?: IntFilter<"LeaveBalance"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type LeaveBalanceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    year?: SortOrder
    total?: SortOrder
    used?: SortOrder
    _count?: LeaveBalanceCountOrderByAggregateInput
    _avg?: LeaveBalanceAvgOrderByAggregateInput
    _max?: LeaveBalanceMaxOrderByAggregateInput
    _min?: LeaveBalanceMinOrderByAggregateInput
    _sum?: LeaveBalanceSumOrderByAggregateInput
  }

  export type LeaveBalanceScalarWhereWithAggregatesInput = {
    AND?: LeaveBalanceScalarWhereWithAggregatesInput | LeaveBalanceScalarWhereWithAggregatesInput[]
    OR?: LeaveBalanceScalarWhereWithAggregatesInput[]
    NOT?: LeaveBalanceScalarWhereWithAggregatesInput | LeaveBalanceScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"LeaveBalance"> | string
    userId?: UuidWithAggregatesFilter<"LeaveBalance"> | string
    type?: EnumLeaveTypeWithAggregatesFilter<"LeaveBalance"> | $Enums.LeaveType
    year?: IntWithAggregatesFilter<"LeaveBalance"> | number
    total?: IntWithAggregatesFilter<"LeaveBalance"> | number
    used?: IntWithAggregatesFilter<"LeaveBalance"> | number
  }

  export type LeaveHistoryWhereInput = {
    AND?: LeaveHistoryWhereInput | LeaveHistoryWhereInput[]
    OR?: LeaveHistoryWhereInput[]
    NOT?: LeaveHistoryWhereInput | LeaveHistoryWhereInput[]
    id?: UuidFilter<"LeaveHistory"> | string
    leaveId?: UuidFilter<"LeaveHistory"> | string
    action?: EnumHistoryActionFilter<"LeaveHistory"> | $Enums.HistoryAction
    byUserId?: UuidFilter<"LeaveHistory"> | string
    createdAt?: DateTimeFilter<"LeaveHistory"> | Date | string
    note?: StringNullableFilter<"LeaveHistory"> | string | null
    leave?: XOR<LeaveScalarRelationFilter, LeaveWhereInput>
    byUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LeaveHistoryOrderByWithRelationInput = {
    id?: SortOrder
    leaveId?: SortOrder
    action?: SortOrder
    byUserId?: SortOrder
    createdAt?: SortOrder
    note?: SortOrderInput | SortOrder
    leave?: LeaveOrderByWithRelationInput
    byUser?: UserOrderByWithRelationInput
  }

  export type LeaveHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LeaveHistoryWhereInput | LeaveHistoryWhereInput[]
    OR?: LeaveHistoryWhereInput[]
    NOT?: LeaveHistoryWhereInput | LeaveHistoryWhereInput[]
    leaveId?: UuidFilter<"LeaveHistory"> | string
    action?: EnumHistoryActionFilter<"LeaveHistory"> | $Enums.HistoryAction
    byUserId?: UuidFilter<"LeaveHistory"> | string
    createdAt?: DateTimeFilter<"LeaveHistory"> | Date | string
    note?: StringNullableFilter<"LeaveHistory"> | string | null
    leave?: XOR<LeaveScalarRelationFilter, LeaveWhereInput>
    byUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type LeaveHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    leaveId?: SortOrder
    action?: SortOrder
    byUserId?: SortOrder
    createdAt?: SortOrder
    note?: SortOrderInput | SortOrder
    _count?: LeaveHistoryCountOrderByAggregateInput
    _max?: LeaveHistoryMaxOrderByAggregateInput
    _min?: LeaveHistoryMinOrderByAggregateInput
  }

  export type LeaveHistoryScalarWhereWithAggregatesInput = {
    AND?: LeaveHistoryScalarWhereWithAggregatesInput | LeaveHistoryScalarWhereWithAggregatesInput[]
    OR?: LeaveHistoryScalarWhereWithAggregatesInput[]
    NOT?: LeaveHistoryScalarWhereWithAggregatesInput | LeaveHistoryScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"LeaveHistory"> | string
    leaveId?: UuidWithAggregatesFilter<"LeaveHistory"> | string
    action?: EnumHistoryActionWithAggregatesFilter<"LeaveHistory"> | $Enums.HistoryAction
    byUserId?: UuidWithAggregatesFilter<"LeaveHistory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LeaveHistory"> | Date | string
    note?: StringNullableWithAggregatesFilter<"LeaveHistory"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    matricule: string
    password: string
    verificationCode?: string | null
    verificationExpiration?: Date | string | null
    resetToken?: string | null
    resetTokenExpiration?: Date | string | null
    isVerified?: boolean
    lastLogin?: Date | string
    role?: $Enums.Role
    createdAt?: Date | string
    leaves?: LeaveCreateNestedManyWithoutUserInput
    balances?: LeaveBalanceCreateNestedManyWithoutUserInput
    reviews?: LeaveCreateNestedManyWithoutReviewerInput
    LeaveHistory?: LeaveHistoryCreateNestedManyWithoutByUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    matricule: string
    password: string
    verificationCode?: string | null
    verificationExpiration?: Date | string | null
    resetToken?: string | null
    resetTokenExpiration?: Date | string | null
    isVerified?: boolean
    lastLogin?: Date | string
    role?: $Enums.Role
    createdAt?: Date | string
    leaves?: LeaveUncheckedCreateNestedManyWithoutUserInput
    balances?: LeaveBalanceUncheckedCreateNestedManyWithoutUserInput
    reviews?: LeaveUncheckedCreateNestedManyWithoutReviewerInput
    LeaveHistory?: LeaveHistoryUncheckedCreateNestedManyWithoutByUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    matricule?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    verificationExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leaves?: LeaveUpdateManyWithoutUserNestedInput
    balances?: LeaveBalanceUpdateManyWithoutUserNestedInput
    reviews?: LeaveUpdateManyWithoutReviewerNestedInput
    LeaveHistory?: LeaveHistoryUpdateManyWithoutByUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    matricule?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    verificationExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leaves?: LeaveUncheckedUpdateManyWithoutUserNestedInput
    balances?: LeaveBalanceUncheckedUpdateManyWithoutUserNestedInput
    reviews?: LeaveUncheckedUpdateManyWithoutReviewerNestedInput
    LeaveHistory?: LeaveHistoryUncheckedUpdateManyWithoutByUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    matricule: string
    password: string
    verificationCode?: string | null
    verificationExpiration?: Date | string | null
    resetToken?: string | null
    resetTokenExpiration?: Date | string | null
    isVerified?: boolean
    lastLogin?: Date | string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    matricule?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    verificationExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    matricule?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    verificationExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveCreateInput = {
    id?: string
    type: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    duration: number
    reason: string
    status?: $Enums.LeaveStatus
    comment?: string | null
    documentUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLeavesInput
    reviewer?: UserCreateNestedOneWithoutReviewsInput
    history?: LeaveHistoryCreateNestedManyWithoutLeaveInput
  }

  export type LeaveUncheckedCreateInput = {
    id?: string
    userId: string
    type: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    duration: number
    reason: string
    status?: $Enums.LeaveStatus
    reviewedBy?: string | null
    comment?: string | null
    documentUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    history?: LeaveHistoryUncheckedCreateNestedManyWithoutLeaveInput
  }

  export type LeaveUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLeavesNestedInput
    reviewer?: UserUpdateOneWithoutReviewsNestedInput
    history?: LeaveHistoryUpdateManyWithoutLeaveNestedInput
  }

  export type LeaveUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: LeaveHistoryUncheckedUpdateManyWithoutLeaveNestedInput
  }

  export type LeaveCreateManyInput = {
    id?: string
    userId: string
    type: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    duration: number
    reason: string
    status?: $Enums.LeaveStatus
    reviewedBy?: string | null
    comment?: string | null
    documentUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaveUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveBalanceCreateInput = {
    id?: string
    type: $Enums.LeaveType
    year: number
    total: number
    used?: number
    user: UserCreateNestedOneWithoutBalancesInput
  }

  export type LeaveBalanceUncheckedCreateInput = {
    id?: string
    userId: string
    type: $Enums.LeaveType
    year: number
    total: number
    used?: number
  }

  export type LeaveBalanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    year?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    used?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutBalancesNestedInput
  }

  export type LeaveBalanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    year?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    used?: IntFieldUpdateOperationsInput | number
  }

  export type LeaveBalanceCreateManyInput = {
    id?: string
    userId: string
    type: $Enums.LeaveType
    year: number
    total: number
    used?: number
  }

  export type LeaveBalanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    year?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    used?: IntFieldUpdateOperationsInput | number
  }

  export type LeaveBalanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    year?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    used?: IntFieldUpdateOperationsInput | number
  }

  export type LeaveHistoryCreateInput = {
    id?: string
    action: $Enums.HistoryAction
    createdAt?: Date | string
    note?: string | null
    leave: LeaveCreateNestedOneWithoutHistoryInput
    byUser: UserCreateNestedOneWithoutLeaveHistoryInput
  }

  export type LeaveHistoryUncheckedCreateInput = {
    id?: string
    leaveId: string
    action: $Enums.HistoryAction
    byUserId: string
    createdAt?: Date | string
    note?: string | null
  }

  export type LeaveHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumHistoryActionFieldUpdateOperationsInput | $Enums.HistoryAction
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    leave?: LeaveUpdateOneRequiredWithoutHistoryNestedInput
    byUser?: UserUpdateOneRequiredWithoutLeaveHistoryNestedInput
  }

  export type LeaveHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveId?: StringFieldUpdateOperationsInput | string
    action?: EnumHistoryActionFieldUpdateOperationsInput | $Enums.HistoryAction
    byUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LeaveHistoryCreateManyInput = {
    id?: string
    leaveId: string
    action: $Enums.HistoryAction
    byUserId: string
    createdAt?: Date | string
    note?: string | null
  }

  export type LeaveHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumHistoryActionFieldUpdateOperationsInput | $Enums.HistoryAction
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LeaveHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveId?: StringFieldUpdateOperationsInput | string
    action?: EnumHistoryActionFieldUpdateOperationsInput | $Enums.HistoryAction
    byUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type LeaveListRelationFilter = {
    every?: LeaveWhereInput
    some?: LeaveWhereInput
    none?: LeaveWhereInput
  }

  export type LeaveBalanceListRelationFilter = {
    every?: LeaveBalanceWhereInput
    some?: LeaveBalanceWhereInput
    none?: LeaveBalanceWhereInput
  }

  export type LeaveHistoryListRelationFilter = {
    every?: LeaveHistoryWhereInput
    some?: LeaveHistoryWhereInput
    none?: LeaveHistoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LeaveOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeaveBalanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeaveHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    matricule?: SortOrder
    password?: SortOrder
    verificationCode?: SortOrder
    verificationExpiration?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiration?: SortOrder
    isVerified?: SortOrder
    lastLogin?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    matricule?: SortOrder
    password?: SortOrder
    verificationCode?: SortOrder
    verificationExpiration?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiration?: SortOrder
    isVerified?: SortOrder
    lastLogin?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    matricule?: SortOrder
    password?: SortOrder
    verificationCode?: SortOrder
    verificationExpiration?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiration?: SortOrder
    isVerified?: SortOrder
    lastLogin?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumLeaveTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveType | EnumLeaveTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveTypeFilter<$PrismaModel> | $Enums.LeaveType
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumLeaveStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveStatus | EnumLeaveStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveStatusFilter<$PrismaModel> | $Enums.LeaveStatus
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type LeaveCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    duration?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    reviewedBy?: SortOrder
    comment?: SortOrder
    documentUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeaveAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type LeaveMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    duration?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    reviewedBy?: SortOrder
    comment?: SortOrder
    documentUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeaveMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    duration?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    reviewedBy?: SortOrder
    comment?: SortOrder
    documentUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeaveSumOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type EnumLeaveTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveType | EnumLeaveTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveTypeWithAggregatesFilter<$PrismaModel> | $Enums.LeaveType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeaveTypeFilter<$PrismaModel>
    _max?: NestedEnumLeaveTypeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumLeaveStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveStatus | EnumLeaveStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveStatusWithAggregatesFilter<$PrismaModel> | $Enums.LeaveStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeaveStatusFilter<$PrismaModel>
    _max?: NestedEnumLeaveStatusFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type LeaveBalanceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    year?: SortOrder
    total?: SortOrder
    used?: SortOrder
  }

  export type LeaveBalanceAvgOrderByAggregateInput = {
    year?: SortOrder
    total?: SortOrder
    used?: SortOrder
  }

  export type LeaveBalanceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    year?: SortOrder
    total?: SortOrder
    used?: SortOrder
  }

  export type LeaveBalanceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    year?: SortOrder
    total?: SortOrder
    used?: SortOrder
  }

  export type LeaveBalanceSumOrderByAggregateInput = {
    year?: SortOrder
    total?: SortOrder
    used?: SortOrder
  }

  export type EnumHistoryActionFilter<$PrismaModel = never> = {
    equals?: $Enums.HistoryAction | EnumHistoryActionFieldRefInput<$PrismaModel>
    in?: $Enums.HistoryAction[] | ListEnumHistoryActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.HistoryAction[] | ListEnumHistoryActionFieldRefInput<$PrismaModel>
    not?: NestedEnumHistoryActionFilter<$PrismaModel> | $Enums.HistoryAction
  }

  export type LeaveScalarRelationFilter = {
    is?: LeaveWhereInput
    isNot?: LeaveWhereInput
  }

  export type LeaveHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    leaveId?: SortOrder
    action?: SortOrder
    byUserId?: SortOrder
    createdAt?: SortOrder
    note?: SortOrder
  }

  export type LeaveHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    leaveId?: SortOrder
    action?: SortOrder
    byUserId?: SortOrder
    createdAt?: SortOrder
    note?: SortOrder
  }

  export type LeaveHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    leaveId?: SortOrder
    action?: SortOrder
    byUserId?: SortOrder
    createdAt?: SortOrder
    note?: SortOrder
  }

  export type EnumHistoryActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HistoryAction | EnumHistoryActionFieldRefInput<$PrismaModel>
    in?: $Enums.HistoryAction[] | ListEnumHistoryActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.HistoryAction[] | ListEnumHistoryActionFieldRefInput<$PrismaModel>
    not?: NestedEnumHistoryActionWithAggregatesFilter<$PrismaModel> | $Enums.HistoryAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHistoryActionFilter<$PrismaModel>
    _max?: NestedEnumHistoryActionFilter<$PrismaModel>
  }

  export type LeaveCreateNestedManyWithoutUserInput = {
    create?: XOR<LeaveCreateWithoutUserInput, LeaveUncheckedCreateWithoutUserInput> | LeaveCreateWithoutUserInput[] | LeaveUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeaveCreateOrConnectWithoutUserInput | LeaveCreateOrConnectWithoutUserInput[]
    createMany?: LeaveCreateManyUserInputEnvelope
    connect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
  }

  export type LeaveBalanceCreateNestedManyWithoutUserInput = {
    create?: XOR<LeaveBalanceCreateWithoutUserInput, LeaveBalanceUncheckedCreateWithoutUserInput> | LeaveBalanceCreateWithoutUserInput[] | LeaveBalanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeaveBalanceCreateOrConnectWithoutUserInput | LeaveBalanceCreateOrConnectWithoutUserInput[]
    createMany?: LeaveBalanceCreateManyUserInputEnvelope
    connect?: LeaveBalanceWhereUniqueInput | LeaveBalanceWhereUniqueInput[]
  }

  export type LeaveCreateNestedManyWithoutReviewerInput = {
    create?: XOR<LeaveCreateWithoutReviewerInput, LeaveUncheckedCreateWithoutReviewerInput> | LeaveCreateWithoutReviewerInput[] | LeaveUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: LeaveCreateOrConnectWithoutReviewerInput | LeaveCreateOrConnectWithoutReviewerInput[]
    createMany?: LeaveCreateManyReviewerInputEnvelope
    connect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
  }

  export type LeaveHistoryCreateNestedManyWithoutByUserInput = {
    create?: XOR<LeaveHistoryCreateWithoutByUserInput, LeaveHistoryUncheckedCreateWithoutByUserInput> | LeaveHistoryCreateWithoutByUserInput[] | LeaveHistoryUncheckedCreateWithoutByUserInput[]
    connectOrCreate?: LeaveHistoryCreateOrConnectWithoutByUserInput | LeaveHistoryCreateOrConnectWithoutByUserInput[]
    createMany?: LeaveHistoryCreateManyByUserInputEnvelope
    connect?: LeaveHistoryWhereUniqueInput | LeaveHistoryWhereUniqueInput[]
  }

  export type LeaveUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LeaveCreateWithoutUserInput, LeaveUncheckedCreateWithoutUserInput> | LeaveCreateWithoutUserInput[] | LeaveUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeaveCreateOrConnectWithoutUserInput | LeaveCreateOrConnectWithoutUserInput[]
    createMany?: LeaveCreateManyUserInputEnvelope
    connect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
  }

  export type LeaveBalanceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LeaveBalanceCreateWithoutUserInput, LeaveBalanceUncheckedCreateWithoutUserInput> | LeaveBalanceCreateWithoutUserInput[] | LeaveBalanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeaveBalanceCreateOrConnectWithoutUserInput | LeaveBalanceCreateOrConnectWithoutUserInput[]
    createMany?: LeaveBalanceCreateManyUserInputEnvelope
    connect?: LeaveBalanceWhereUniqueInput | LeaveBalanceWhereUniqueInput[]
  }

  export type LeaveUncheckedCreateNestedManyWithoutReviewerInput = {
    create?: XOR<LeaveCreateWithoutReviewerInput, LeaveUncheckedCreateWithoutReviewerInput> | LeaveCreateWithoutReviewerInput[] | LeaveUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: LeaveCreateOrConnectWithoutReviewerInput | LeaveCreateOrConnectWithoutReviewerInput[]
    createMany?: LeaveCreateManyReviewerInputEnvelope
    connect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
  }

  export type LeaveHistoryUncheckedCreateNestedManyWithoutByUserInput = {
    create?: XOR<LeaveHistoryCreateWithoutByUserInput, LeaveHistoryUncheckedCreateWithoutByUserInput> | LeaveHistoryCreateWithoutByUserInput[] | LeaveHistoryUncheckedCreateWithoutByUserInput[]
    connectOrCreate?: LeaveHistoryCreateOrConnectWithoutByUserInput | LeaveHistoryCreateOrConnectWithoutByUserInput[]
    createMany?: LeaveHistoryCreateManyByUserInputEnvelope
    connect?: LeaveHistoryWhereUniqueInput | LeaveHistoryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type LeaveUpdateManyWithoutUserNestedInput = {
    create?: XOR<LeaveCreateWithoutUserInput, LeaveUncheckedCreateWithoutUserInput> | LeaveCreateWithoutUserInput[] | LeaveUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeaveCreateOrConnectWithoutUserInput | LeaveCreateOrConnectWithoutUserInput[]
    upsert?: LeaveUpsertWithWhereUniqueWithoutUserInput | LeaveUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LeaveCreateManyUserInputEnvelope
    set?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    disconnect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    delete?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    connect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    update?: LeaveUpdateWithWhereUniqueWithoutUserInput | LeaveUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LeaveUpdateManyWithWhereWithoutUserInput | LeaveUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LeaveScalarWhereInput | LeaveScalarWhereInput[]
  }

  export type LeaveBalanceUpdateManyWithoutUserNestedInput = {
    create?: XOR<LeaveBalanceCreateWithoutUserInput, LeaveBalanceUncheckedCreateWithoutUserInput> | LeaveBalanceCreateWithoutUserInput[] | LeaveBalanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeaveBalanceCreateOrConnectWithoutUserInput | LeaveBalanceCreateOrConnectWithoutUserInput[]
    upsert?: LeaveBalanceUpsertWithWhereUniqueWithoutUserInput | LeaveBalanceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LeaveBalanceCreateManyUserInputEnvelope
    set?: LeaveBalanceWhereUniqueInput | LeaveBalanceWhereUniqueInput[]
    disconnect?: LeaveBalanceWhereUniqueInput | LeaveBalanceWhereUniqueInput[]
    delete?: LeaveBalanceWhereUniqueInput | LeaveBalanceWhereUniqueInput[]
    connect?: LeaveBalanceWhereUniqueInput | LeaveBalanceWhereUniqueInput[]
    update?: LeaveBalanceUpdateWithWhereUniqueWithoutUserInput | LeaveBalanceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LeaveBalanceUpdateManyWithWhereWithoutUserInput | LeaveBalanceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LeaveBalanceScalarWhereInput | LeaveBalanceScalarWhereInput[]
  }

  export type LeaveUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<LeaveCreateWithoutReviewerInput, LeaveUncheckedCreateWithoutReviewerInput> | LeaveCreateWithoutReviewerInput[] | LeaveUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: LeaveCreateOrConnectWithoutReviewerInput | LeaveCreateOrConnectWithoutReviewerInput[]
    upsert?: LeaveUpsertWithWhereUniqueWithoutReviewerInput | LeaveUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: LeaveCreateManyReviewerInputEnvelope
    set?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    disconnect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    delete?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    connect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    update?: LeaveUpdateWithWhereUniqueWithoutReviewerInput | LeaveUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: LeaveUpdateManyWithWhereWithoutReviewerInput | LeaveUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: LeaveScalarWhereInput | LeaveScalarWhereInput[]
  }

  export type LeaveHistoryUpdateManyWithoutByUserNestedInput = {
    create?: XOR<LeaveHistoryCreateWithoutByUserInput, LeaveHistoryUncheckedCreateWithoutByUserInput> | LeaveHistoryCreateWithoutByUserInput[] | LeaveHistoryUncheckedCreateWithoutByUserInput[]
    connectOrCreate?: LeaveHistoryCreateOrConnectWithoutByUserInput | LeaveHistoryCreateOrConnectWithoutByUserInput[]
    upsert?: LeaveHistoryUpsertWithWhereUniqueWithoutByUserInput | LeaveHistoryUpsertWithWhereUniqueWithoutByUserInput[]
    createMany?: LeaveHistoryCreateManyByUserInputEnvelope
    set?: LeaveHistoryWhereUniqueInput | LeaveHistoryWhereUniqueInput[]
    disconnect?: LeaveHistoryWhereUniqueInput | LeaveHistoryWhereUniqueInput[]
    delete?: LeaveHistoryWhereUniqueInput | LeaveHistoryWhereUniqueInput[]
    connect?: LeaveHistoryWhereUniqueInput | LeaveHistoryWhereUniqueInput[]
    update?: LeaveHistoryUpdateWithWhereUniqueWithoutByUserInput | LeaveHistoryUpdateWithWhereUniqueWithoutByUserInput[]
    updateMany?: LeaveHistoryUpdateManyWithWhereWithoutByUserInput | LeaveHistoryUpdateManyWithWhereWithoutByUserInput[]
    deleteMany?: LeaveHistoryScalarWhereInput | LeaveHistoryScalarWhereInput[]
  }

  export type LeaveUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LeaveCreateWithoutUserInput, LeaveUncheckedCreateWithoutUserInput> | LeaveCreateWithoutUserInput[] | LeaveUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeaveCreateOrConnectWithoutUserInput | LeaveCreateOrConnectWithoutUserInput[]
    upsert?: LeaveUpsertWithWhereUniqueWithoutUserInput | LeaveUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LeaveCreateManyUserInputEnvelope
    set?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    disconnect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    delete?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    connect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    update?: LeaveUpdateWithWhereUniqueWithoutUserInput | LeaveUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LeaveUpdateManyWithWhereWithoutUserInput | LeaveUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LeaveScalarWhereInput | LeaveScalarWhereInput[]
  }

  export type LeaveBalanceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LeaveBalanceCreateWithoutUserInput, LeaveBalanceUncheckedCreateWithoutUserInput> | LeaveBalanceCreateWithoutUserInput[] | LeaveBalanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeaveBalanceCreateOrConnectWithoutUserInput | LeaveBalanceCreateOrConnectWithoutUserInput[]
    upsert?: LeaveBalanceUpsertWithWhereUniqueWithoutUserInput | LeaveBalanceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LeaveBalanceCreateManyUserInputEnvelope
    set?: LeaveBalanceWhereUniqueInput | LeaveBalanceWhereUniqueInput[]
    disconnect?: LeaveBalanceWhereUniqueInput | LeaveBalanceWhereUniqueInput[]
    delete?: LeaveBalanceWhereUniqueInput | LeaveBalanceWhereUniqueInput[]
    connect?: LeaveBalanceWhereUniqueInput | LeaveBalanceWhereUniqueInput[]
    update?: LeaveBalanceUpdateWithWhereUniqueWithoutUserInput | LeaveBalanceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LeaveBalanceUpdateManyWithWhereWithoutUserInput | LeaveBalanceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LeaveBalanceScalarWhereInput | LeaveBalanceScalarWhereInput[]
  }

  export type LeaveUncheckedUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<LeaveCreateWithoutReviewerInput, LeaveUncheckedCreateWithoutReviewerInput> | LeaveCreateWithoutReviewerInput[] | LeaveUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: LeaveCreateOrConnectWithoutReviewerInput | LeaveCreateOrConnectWithoutReviewerInput[]
    upsert?: LeaveUpsertWithWhereUniqueWithoutReviewerInput | LeaveUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: LeaveCreateManyReviewerInputEnvelope
    set?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    disconnect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    delete?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    connect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    update?: LeaveUpdateWithWhereUniqueWithoutReviewerInput | LeaveUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: LeaveUpdateManyWithWhereWithoutReviewerInput | LeaveUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: LeaveScalarWhereInput | LeaveScalarWhereInput[]
  }

  export type LeaveHistoryUncheckedUpdateManyWithoutByUserNestedInput = {
    create?: XOR<LeaveHistoryCreateWithoutByUserInput, LeaveHistoryUncheckedCreateWithoutByUserInput> | LeaveHistoryCreateWithoutByUserInput[] | LeaveHistoryUncheckedCreateWithoutByUserInput[]
    connectOrCreate?: LeaveHistoryCreateOrConnectWithoutByUserInput | LeaveHistoryCreateOrConnectWithoutByUserInput[]
    upsert?: LeaveHistoryUpsertWithWhereUniqueWithoutByUserInput | LeaveHistoryUpsertWithWhereUniqueWithoutByUserInput[]
    createMany?: LeaveHistoryCreateManyByUserInputEnvelope
    set?: LeaveHistoryWhereUniqueInput | LeaveHistoryWhereUniqueInput[]
    disconnect?: LeaveHistoryWhereUniqueInput | LeaveHistoryWhereUniqueInput[]
    delete?: LeaveHistoryWhereUniqueInput | LeaveHistoryWhereUniqueInput[]
    connect?: LeaveHistoryWhereUniqueInput | LeaveHistoryWhereUniqueInput[]
    update?: LeaveHistoryUpdateWithWhereUniqueWithoutByUserInput | LeaveHistoryUpdateWithWhereUniqueWithoutByUserInput[]
    updateMany?: LeaveHistoryUpdateManyWithWhereWithoutByUserInput | LeaveHistoryUpdateManyWithWhereWithoutByUserInput[]
    deleteMany?: LeaveHistoryScalarWhereInput | LeaveHistoryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLeavesInput = {
    create?: XOR<UserCreateWithoutLeavesInput, UserUncheckedCreateWithoutLeavesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLeavesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type LeaveHistoryCreateNestedManyWithoutLeaveInput = {
    create?: XOR<LeaveHistoryCreateWithoutLeaveInput, LeaveHistoryUncheckedCreateWithoutLeaveInput> | LeaveHistoryCreateWithoutLeaveInput[] | LeaveHistoryUncheckedCreateWithoutLeaveInput[]
    connectOrCreate?: LeaveHistoryCreateOrConnectWithoutLeaveInput | LeaveHistoryCreateOrConnectWithoutLeaveInput[]
    createMany?: LeaveHistoryCreateManyLeaveInputEnvelope
    connect?: LeaveHistoryWhereUniqueInput | LeaveHistoryWhereUniqueInput[]
  }

  export type LeaveHistoryUncheckedCreateNestedManyWithoutLeaveInput = {
    create?: XOR<LeaveHistoryCreateWithoutLeaveInput, LeaveHistoryUncheckedCreateWithoutLeaveInput> | LeaveHistoryCreateWithoutLeaveInput[] | LeaveHistoryUncheckedCreateWithoutLeaveInput[]
    connectOrCreate?: LeaveHistoryCreateOrConnectWithoutLeaveInput | LeaveHistoryCreateOrConnectWithoutLeaveInput[]
    createMany?: LeaveHistoryCreateManyLeaveInputEnvelope
    connect?: LeaveHistoryWhereUniqueInput | LeaveHistoryWhereUniqueInput[]
  }

  export type EnumLeaveTypeFieldUpdateOperationsInput = {
    set?: $Enums.LeaveType
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumLeaveStatusFieldUpdateOperationsInput = {
    set?: $Enums.LeaveStatus
  }

  export type UserUpdateOneRequiredWithoutLeavesNestedInput = {
    create?: XOR<UserCreateWithoutLeavesInput, UserUncheckedCreateWithoutLeavesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLeavesInput
    upsert?: UserUpsertWithoutLeavesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLeavesInput, UserUpdateWithoutLeavesInput>, UserUncheckedUpdateWithoutLeavesInput>
  }

  export type UserUpdateOneWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type LeaveHistoryUpdateManyWithoutLeaveNestedInput = {
    create?: XOR<LeaveHistoryCreateWithoutLeaveInput, LeaveHistoryUncheckedCreateWithoutLeaveInput> | LeaveHistoryCreateWithoutLeaveInput[] | LeaveHistoryUncheckedCreateWithoutLeaveInput[]
    connectOrCreate?: LeaveHistoryCreateOrConnectWithoutLeaveInput | LeaveHistoryCreateOrConnectWithoutLeaveInput[]
    upsert?: LeaveHistoryUpsertWithWhereUniqueWithoutLeaveInput | LeaveHistoryUpsertWithWhereUniqueWithoutLeaveInput[]
    createMany?: LeaveHistoryCreateManyLeaveInputEnvelope
    set?: LeaveHistoryWhereUniqueInput | LeaveHistoryWhereUniqueInput[]
    disconnect?: LeaveHistoryWhereUniqueInput | LeaveHistoryWhereUniqueInput[]
    delete?: LeaveHistoryWhereUniqueInput | LeaveHistoryWhereUniqueInput[]
    connect?: LeaveHistoryWhereUniqueInput | LeaveHistoryWhereUniqueInput[]
    update?: LeaveHistoryUpdateWithWhereUniqueWithoutLeaveInput | LeaveHistoryUpdateWithWhereUniqueWithoutLeaveInput[]
    updateMany?: LeaveHistoryUpdateManyWithWhereWithoutLeaveInput | LeaveHistoryUpdateManyWithWhereWithoutLeaveInput[]
    deleteMany?: LeaveHistoryScalarWhereInput | LeaveHistoryScalarWhereInput[]
  }

  export type LeaveHistoryUncheckedUpdateManyWithoutLeaveNestedInput = {
    create?: XOR<LeaveHistoryCreateWithoutLeaveInput, LeaveHistoryUncheckedCreateWithoutLeaveInput> | LeaveHistoryCreateWithoutLeaveInput[] | LeaveHistoryUncheckedCreateWithoutLeaveInput[]
    connectOrCreate?: LeaveHistoryCreateOrConnectWithoutLeaveInput | LeaveHistoryCreateOrConnectWithoutLeaveInput[]
    upsert?: LeaveHistoryUpsertWithWhereUniqueWithoutLeaveInput | LeaveHistoryUpsertWithWhereUniqueWithoutLeaveInput[]
    createMany?: LeaveHistoryCreateManyLeaveInputEnvelope
    set?: LeaveHistoryWhereUniqueInput | LeaveHistoryWhereUniqueInput[]
    disconnect?: LeaveHistoryWhereUniqueInput | LeaveHistoryWhereUniqueInput[]
    delete?: LeaveHistoryWhereUniqueInput | LeaveHistoryWhereUniqueInput[]
    connect?: LeaveHistoryWhereUniqueInput | LeaveHistoryWhereUniqueInput[]
    update?: LeaveHistoryUpdateWithWhereUniqueWithoutLeaveInput | LeaveHistoryUpdateWithWhereUniqueWithoutLeaveInput[]
    updateMany?: LeaveHistoryUpdateManyWithWhereWithoutLeaveInput | LeaveHistoryUpdateManyWithWhereWithoutLeaveInput[]
    deleteMany?: LeaveHistoryScalarWhereInput | LeaveHistoryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBalancesInput = {
    create?: XOR<UserCreateWithoutBalancesInput, UserUncheckedCreateWithoutBalancesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBalancesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBalancesNestedInput = {
    create?: XOR<UserCreateWithoutBalancesInput, UserUncheckedCreateWithoutBalancesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBalancesInput
    upsert?: UserUpsertWithoutBalancesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBalancesInput, UserUpdateWithoutBalancesInput>, UserUncheckedUpdateWithoutBalancesInput>
  }

  export type LeaveCreateNestedOneWithoutHistoryInput = {
    create?: XOR<LeaveCreateWithoutHistoryInput, LeaveUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: LeaveCreateOrConnectWithoutHistoryInput
    connect?: LeaveWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLeaveHistoryInput = {
    create?: XOR<UserCreateWithoutLeaveHistoryInput, UserUncheckedCreateWithoutLeaveHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutLeaveHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type EnumHistoryActionFieldUpdateOperationsInput = {
    set?: $Enums.HistoryAction
  }

  export type LeaveUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<LeaveCreateWithoutHistoryInput, LeaveUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: LeaveCreateOrConnectWithoutHistoryInput
    upsert?: LeaveUpsertWithoutHistoryInput
    connect?: LeaveWhereUniqueInput
    update?: XOR<XOR<LeaveUpdateToOneWithWhereWithoutHistoryInput, LeaveUpdateWithoutHistoryInput>, LeaveUncheckedUpdateWithoutHistoryInput>
  }

  export type UserUpdateOneRequiredWithoutLeaveHistoryNestedInput = {
    create?: XOR<UserCreateWithoutLeaveHistoryInput, UserUncheckedCreateWithoutLeaveHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutLeaveHistoryInput
    upsert?: UserUpsertWithoutLeaveHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLeaveHistoryInput, UserUpdateWithoutLeaveHistoryInput>, UserUncheckedUpdateWithoutLeaveHistoryInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumLeaveTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveType | EnumLeaveTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveTypeFilter<$PrismaModel> | $Enums.LeaveType
  }

  export type NestedEnumLeaveStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveStatus | EnumLeaveStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveStatusFilter<$PrismaModel> | $Enums.LeaveStatus
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumLeaveTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveType | EnumLeaveTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveTypeWithAggregatesFilter<$PrismaModel> | $Enums.LeaveType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeaveTypeFilter<$PrismaModel>
    _max?: NestedEnumLeaveTypeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumLeaveStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveStatus | EnumLeaveStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveStatusWithAggregatesFilter<$PrismaModel> | $Enums.LeaveStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeaveStatusFilter<$PrismaModel>
    _max?: NestedEnumLeaveStatusFilter<$PrismaModel>
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumHistoryActionFilter<$PrismaModel = never> = {
    equals?: $Enums.HistoryAction | EnumHistoryActionFieldRefInput<$PrismaModel>
    in?: $Enums.HistoryAction[] | ListEnumHistoryActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.HistoryAction[] | ListEnumHistoryActionFieldRefInput<$PrismaModel>
    not?: NestedEnumHistoryActionFilter<$PrismaModel> | $Enums.HistoryAction
  }

  export type NestedEnumHistoryActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HistoryAction | EnumHistoryActionFieldRefInput<$PrismaModel>
    in?: $Enums.HistoryAction[] | ListEnumHistoryActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.HistoryAction[] | ListEnumHistoryActionFieldRefInput<$PrismaModel>
    not?: NestedEnumHistoryActionWithAggregatesFilter<$PrismaModel> | $Enums.HistoryAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHistoryActionFilter<$PrismaModel>
    _max?: NestedEnumHistoryActionFilter<$PrismaModel>
  }

  export type LeaveCreateWithoutUserInput = {
    id?: string
    type: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    duration: number
    reason: string
    status?: $Enums.LeaveStatus
    comment?: string | null
    documentUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewer?: UserCreateNestedOneWithoutReviewsInput
    history?: LeaveHistoryCreateNestedManyWithoutLeaveInput
  }

  export type LeaveUncheckedCreateWithoutUserInput = {
    id?: string
    type: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    duration: number
    reason: string
    status?: $Enums.LeaveStatus
    reviewedBy?: string | null
    comment?: string | null
    documentUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    history?: LeaveHistoryUncheckedCreateNestedManyWithoutLeaveInput
  }

  export type LeaveCreateOrConnectWithoutUserInput = {
    where: LeaveWhereUniqueInput
    create: XOR<LeaveCreateWithoutUserInput, LeaveUncheckedCreateWithoutUserInput>
  }

  export type LeaveCreateManyUserInputEnvelope = {
    data: LeaveCreateManyUserInput | LeaveCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LeaveBalanceCreateWithoutUserInput = {
    id?: string
    type: $Enums.LeaveType
    year: number
    total: number
    used?: number
  }

  export type LeaveBalanceUncheckedCreateWithoutUserInput = {
    id?: string
    type: $Enums.LeaveType
    year: number
    total: number
    used?: number
  }

  export type LeaveBalanceCreateOrConnectWithoutUserInput = {
    where: LeaveBalanceWhereUniqueInput
    create: XOR<LeaveBalanceCreateWithoutUserInput, LeaveBalanceUncheckedCreateWithoutUserInput>
  }

  export type LeaveBalanceCreateManyUserInputEnvelope = {
    data: LeaveBalanceCreateManyUserInput | LeaveBalanceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LeaveCreateWithoutReviewerInput = {
    id?: string
    type: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    duration: number
    reason: string
    status?: $Enums.LeaveStatus
    comment?: string | null
    documentUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLeavesInput
    history?: LeaveHistoryCreateNestedManyWithoutLeaveInput
  }

  export type LeaveUncheckedCreateWithoutReviewerInput = {
    id?: string
    userId: string
    type: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    duration: number
    reason: string
    status?: $Enums.LeaveStatus
    comment?: string | null
    documentUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    history?: LeaveHistoryUncheckedCreateNestedManyWithoutLeaveInput
  }

  export type LeaveCreateOrConnectWithoutReviewerInput = {
    where: LeaveWhereUniqueInput
    create: XOR<LeaveCreateWithoutReviewerInput, LeaveUncheckedCreateWithoutReviewerInput>
  }

  export type LeaveCreateManyReviewerInputEnvelope = {
    data: LeaveCreateManyReviewerInput | LeaveCreateManyReviewerInput[]
    skipDuplicates?: boolean
  }

  export type LeaveHistoryCreateWithoutByUserInput = {
    id?: string
    action: $Enums.HistoryAction
    createdAt?: Date | string
    note?: string | null
    leave: LeaveCreateNestedOneWithoutHistoryInput
  }

  export type LeaveHistoryUncheckedCreateWithoutByUserInput = {
    id?: string
    leaveId: string
    action: $Enums.HistoryAction
    createdAt?: Date | string
    note?: string | null
  }

  export type LeaveHistoryCreateOrConnectWithoutByUserInput = {
    where: LeaveHistoryWhereUniqueInput
    create: XOR<LeaveHistoryCreateWithoutByUserInput, LeaveHistoryUncheckedCreateWithoutByUserInput>
  }

  export type LeaveHistoryCreateManyByUserInputEnvelope = {
    data: LeaveHistoryCreateManyByUserInput | LeaveHistoryCreateManyByUserInput[]
    skipDuplicates?: boolean
  }

  export type LeaveUpsertWithWhereUniqueWithoutUserInput = {
    where: LeaveWhereUniqueInput
    update: XOR<LeaveUpdateWithoutUserInput, LeaveUncheckedUpdateWithoutUserInput>
    create: XOR<LeaveCreateWithoutUserInput, LeaveUncheckedCreateWithoutUserInput>
  }

  export type LeaveUpdateWithWhereUniqueWithoutUserInput = {
    where: LeaveWhereUniqueInput
    data: XOR<LeaveUpdateWithoutUserInput, LeaveUncheckedUpdateWithoutUserInput>
  }

  export type LeaveUpdateManyWithWhereWithoutUserInput = {
    where: LeaveScalarWhereInput
    data: XOR<LeaveUpdateManyMutationInput, LeaveUncheckedUpdateManyWithoutUserInput>
  }

  export type LeaveScalarWhereInput = {
    AND?: LeaveScalarWhereInput | LeaveScalarWhereInput[]
    OR?: LeaveScalarWhereInput[]
    NOT?: LeaveScalarWhereInput | LeaveScalarWhereInput[]
    id?: UuidFilter<"Leave"> | string
    userId?: UuidFilter<"Leave"> | string
    type?: EnumLeaveTypeFilter<"Leave"> | $Enums.LeaveType
    startDate?: DateTimeFilter<"Leave"> | Date | string
    endDate?: DateTimeFilter<"Leave"> | Date | string
    duration?: IntFilter<"Leave"> | number
    reason?: StringFilter<"Leave"> | string
    status?: EnumLeaveStatusFilter<"Leave"> | $Enums.LeaveStatus
    reviewedBy?: UuidNullableFilter<"Leave"> | string | null
    comment?: StringNullableFilter<"Leave"> | string | null
    documentUrl?: StringNullableFilter<"Leave"> | string | null
    createdAt?: DateTimeFilter<"Leave"> | Date | string
    updatedAt?: DateTimeFilter<"Leave"> | Date | string
  }

  export type LeaveBalanceUpsertWithWhereUniqueWithoutUserInput = {
    where: LeaveBalanceWhereUniqueInput
    update: XOR<LeaveBalanceUpdateWithoutUserInput, LeaveBalanceUncheckedUpdateWithoutUserInput>
    create: XOR<LeaveBalanceCreateWithoutUserInput, LeaveBalanceUncheckedCreateWithoutUserInput>
  }

  export type LeaveBalanceUpdateWithWhereUniqueWithoutUserInput = {
    where: LeaveBalanceWhereUniqueInput
    data: XOR<LeaveBalanceUpdateWithoutUserInput, LeaveBalanceUncheckedUpdateWithoutUserInput>
  }

  export type LeaveBalanceUpdateManyWithWhereWithoutUserInput = {
    where: LeaveBalanceScalarWhereInput
    data: XOR<LeaveBalanceUpdateManyMutationInput, LeaveBalanceUncheckedUpdateManyWithoutUserInput>
  }

  export type LeaveBalanceScalarWhereInput = {
    AND?: LeaveBalanceScalarWhereInput | LeaveBalanceScalarWhereInput[]
    OR?: LeaveBalanceScalarWhereInput[]
    NOT?: LeaveBalanceScalarWhereInput | LeaveBalanceScalarWhereInput[]
    id?: UuidFilter<"LeaveBalance"> | string
    userId?: UuidFilter<"LeaveBalance"> | string
    type?: EnumLeaveTypeFilter<"LeaveBalance"> | $Enums.LeaveType
    year?: IntFilter<"LeaveBalance"> | number
    total?: IntFilter<"LeaveBalance"> | number
    used?: IntFilter<"LeaveBalance"> | number
  }

  export type LeaveUpsertWithWhereUniqueWithoutReviewerInput = {
    where: LeaveWhereUniqueInput
    update: XOR<LeaveUpdateWithoutReviewerInput, LeaveUncheckedUpdateWithoutReviewerInput>
    create: XOR<LeaveCreateWithoutReviewerInput, LeaveUncheckedCreateWithoutReviewerInput>
  }

  export type LeaveUpdateWithWhereUniqueWithoutReviewerInput = {
    where: LeaveWhereUniqueInput
    data: XOR<LeaveUpdateWithoutReviewerInput, LeaveUncheckedUpdateWithoutReviewerInput>
  }

  export type LeaveUpdateManyWithWhereWithoutReviewerInput = {
    where: LeaveScalarWhereInput
    data: XOR<LeaveUpdateManyMutationInput, LeaveUncheckedUpdateManyWithoutReviewerInput>
  }

  export type LeaveHistoryUpsertWithWhereUniqueWithoutByUserInput = {
    where: LeaveHistoryWhereUniqueInput
    update: XOR<LeaveHistoryUpdateWithoutByUserInput, LeaveHistoryUncheckedUpdateWithoutByUserInput>
    create: XOR<LeaveHistoryCreateWithoutByUserInput, LeaveHistoryUncheckedCreateWithoutByUserInput>
  }

  export type LeaveHistoryUpdateWithWhereUniqueWithoutByUserInput = {
    where: LeaveHistoryWhereUniqueInput
    data: XOR<LeaveHistoryUpdateWithoutByUserInput, LeaveHistoryUncheckedUpdateWithoutByUserInput>
  }

  export type LeaveHistoryUpdateManyWithWhereWithoutByUserInput = {
    where: LeaveHistoryScalarWhereInput
    data: XOR<LeaveHistoryUpdateManyMutationInput, LeaveHistoryUncheckedUpdateManyWithoutByUserInput>
  }

  export type LeaveHistoryScalarWhereInput = {
    AND?: LeaveHistoryScalarWhereInput | LeaveHistoryScalarWhereInput[]
    OR?: LeaveHistoryScalarWhereInput[]
    NOT?: LeaveHistoryScalarWhereInput | LeaveHistoryScalarWhereInput[]
    id?: UuidFilter<"LeaveHistory"> | string
    leaveId?: UuidFilter<"LeaveHistory"> | string
    action?: EnumHistoryActionFilter<"LeaveHistory"> | $Enums.HistoryAction
    byUserId?: UuidFilter<"LeaveHistory"> | string
    createdAt?: DateTimeFilter<"LeaveHistory"> | Date | string
    note?: StringNullableFilter<"LeaveHistory"> | string | null
  }

  export type UserCreateWithoutLeavesInput = {
    id?: string
    name: string
    email: string
    matricule: string
    password: string
    verificationCode?: string | null
    verificationExpiration?: Date | string | null
    resetToken?: string | null
    resetTokenExpiration?: Date | string | null
    isVerified?: boolean
    lastLogin?: Date | string
    role?: $Enums.Role
    createdAt?: Date | string
    balances?: LeaveBalanceCreateNestedManyWithoutUserInput
    reviews?: LeaveCreateNestedManyWithoutReviewerInput
    LeaveHistory?: LeaveHistoryCreateNestedManyWithoutByUserInput
  }

  export type UserUncheckedCreateWithoutLeavesInput = {
    id?: string
    name: string
    email: string
    matricule: string
    password: string
    verificationCode?: string | null
    verificationExpiration?: Date | string | null
    resetToken?: string | null
    resetTokenExpiration?: Date | string | null
    isVerified?: boolean
    lastLogin?: Date | string
    role?: $Enums.Role
    createdAt?: Date | string
    balances?: LeaveBalanceUncheckedCreateNestedManyWithoutUserInput
    reviews?: LeaveUncheckedCreateNestedManyWithoutReviewerInput
    LeaveHistory?: LeaveHistoryUncheckedCreateNestedManyWithoutByUserInput
  }

  export type UserCreateOrConnectWithoutLeavesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLeavesInput, UserUncheckedCreateWithoutLeavesInput>
  }

  export type UserCreateWithoutReviewsInput = {
    id?: string
    name: string
    email: string
    matricule: string
    password: string
    verificationCode?: string | null
    verificationExpiration?: Date | string | null
    resetToken?: string | null
    resetTokenExpiration?: Date | string | null
    isVerified?: boolean
    lastLogin?: Date | string
    role?: $Enums.Role
    createdAt?: Date | string
    leaves?: LeaveCreateNestedManyWithoutUserInput
    balances?: LeaveBalanceCreateNestedManyWithoutUserInput
    LeaveHistory?: LeaveHistoryCreateNestedManyWithoutByUserInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: string
    name: string
    email: string
    matricule: string
    password: string
    verificationCode?: string | null
    verificationExpiration?: Date | string | null
    resetToken?: string | null
    resetTokenExpiration?: Date | string | null
    isVerified?: boolean
    lastLogin?: Date | string
    role?: $Enums.Role
    createdAt?: Date | string
    leaves?: LeaveUncheckedCreateNestedManyWithoutUserInput
    balances?: LeaveBalanceUncheckedCreateNestedManyWithoutUserInput
    LeaveHistory?: LeaveHistoryUncheckedCreateNestedManyWithoutByUserInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type LeaveHistoryCreateWithoutLeaveInput = {
    id?: string
    action: $Enums.HistoryAction
    createdAt?: Date | string
    note?: string | null
    byUser: UserCreateNestedOneWithoutLeaveHistoryInput
  }

  export type LeaveHistoryUncheckedCreateWithoutLeaveInput = {
    id?: string
    action: $Enums.HistoryAction
    byUserId: string
    createdAt?: Date | string
    note?: string | null
  }

  export type LeaveHistoryCreateOrConnectWithoutLeaveInput = {
    where: LeaveHistoryWhereUniqueInput
    create: XOR<LeaveHistoryCreateWithoutLeaveInput, LeaveHistoryUncheckedCreateWithoutLeaveInput>
  }

  export type LeaveHistoryCreateManyLeaveInputEnvelope = {
    data: LeaveHistoryCreateManyLeaveInput | LeaveHistoryCreateManyLeaveInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutLeavesInput = {
    update: XOR<UserUpdateWithoutLeavesInput, UserUncheckedUpdateWithoutLeavesInput>
    create: XOR<UserCreateWithoutLeavesInput, UserUncheckedCreateWithoutLeavesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLeavesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLeavesInput, UserUncheckedUpdateWithoutLeavesInput>
  }

  export type UserUpdateWithoutLeavesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    matricule?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    verificationExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balances?: LeaveBalanceUpdateManyWithoutUserNestedInput
    reviews?: LeaveUpdateManyWithoutReviewerNestedInput
    LeaveHistory?: LeaveHistoryUpdateManyWithoutByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLeavesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    matricule?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    verificationExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balances?: LeaveBalanceUncheckedUpdateManyWithoutUserNestedInput
    reviews?: LeaveUncheckedUpdateManyWithoutReviewerNestedInput
    LeaveHistory?: LeaveHistoryUncheckedUpdateManyWithoutByUserNestedInput
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    matricule?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    verificationExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leaves?: LeaveUpdateManyWithoutUserNestedInput
    balances?: LeaveBalanceUpdateManyWithoutUserNestedInput
    LeaveHistory?: LeaveHistoryUpdateManyWithoutByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    matricule?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    verificationExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leaves?: LeaveUncheckedUpdateManyWithoutUserNestedInput
    balances?: LeaveBalanceUncheckedUpdateManyWithoutUserNestedInput
    LeaveHistory?: LeaveHistoryUncheckedUpdateManyWithoutByUserNestedInput
  }

  export type LeaveHistoryUpsertWithWhereUniqueWithoutLeaveInput = {
    where: LeaveHistoryWhereUniqueInput
    update: XOR<LeaveHistoryUpdateWithoutLeaveInput, LeaveHistoryUncheckedUpdateWithoutLeaveInput>
    create: XOR<LeaveHistoryCreateWithoutLeaveInput, LeaveHistoryUncheckedCreateWithoutLeaveInput>
  }

  export type LeaveHistoryUpdateWithWhereUniqueWithoutLeaveInput = {
    where: LeaveHistoryWhereUniqueInput
    data: XOR<LeaveHistoryUpdateWithoutLeaveInput, LeaveHistoryUncheckedUpdateWithoutLeaveInput>
  }

  export type LeaveHistoryUpdateManyWithWhereWithoutLeaveInput = {
    where: LeaveHistoryScalarWhereInput
    data: XOR<LeaveHistoryUpdateManyMutationInput, LeaveHistoryUncheckedUpdateManyWithoutLeaveInput>
  }

  export type UserCreateWithoutBalancesInput = {
    id?: string
    name: string
    email: string
    matricule: string
    password: string
    verificationCode?: string | null
    verificationExpiration?: Date | string | null
    resetToken?: string | null
    resetTokenExpiration?: Date | string | null
    isVerified?: boolean
    lastLogin?: Date | string
    role?: $Enums.Role
    createdAt?: Date | string
    leaves?: LeaveCreateNestedManyWithoutUserInput
    reviews?: LeaveCreateNestedManyWithoutReviewerInput
    LeaveHistory?: LeaveHistoryCreateNestedManyWithoutByUserInput
  }

  export type UserUncheckedCreateWithoutBalancesInput = {
    id?: string
    name: string
    email: string
    matricule: string
    password: string
    verificationCode?: string | null
    verificationExpiration?: Date | string | null
    resetToken?: string | null
    resetTokenExpiration?: Date | string | null
    isVerified?: boolean
    lastLogin?: Date | string
    role?: $Enums.Role
    createdAt?: Date | string
    leaves?: LeaveUncheckedCreateNestedManyWithoutUserInput
    reviews?: LeaveUncheckedCreateNestedManyWithoutReviewerInput
    LeaveHistory?: LeaveHistoryUncheckedCreateNestedManyWithoutByUserInput
  }

  export type UserCreateOrConnectWithoutBalancesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBalancesInput, UserUncheckedCreateWithoutBalancesInput>
  }

  export type UserUpsertWithoutBalancesInput = {
    update: XOR<UserUpdateWithoutBalancesInput, UserUncheckedUpdateWithoutBalancesInput>
    create: XOR<UserCreateWithoutBalancesInput, UserUncheckedCreateWithoutBalancesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBalancesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBalancesInput, UserUncheckedUpdateWithoutBalancesInput>
  }

  export type UserUpdateWithoutBalancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    matricule?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    verificationExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leaves?: LeaveUpdateManyWithoutUserNestedInput
    reviews?: LeaveUpdateManyWithoutReviewerNestedInput
    LeaveHistory?: LeaveHistoryUpdateManyWithoutByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBalancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    matricule?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    verificationExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leaves?: LeaveUncheckedUpdateManyWithoutUserNestedInput
    reviews?: LeaveUncheckedUpdateManyWithoutReviewerNestedInput
    LeaveHistory?: LeaveHistoryUncheckedUpdateManyWithoutByUserNestedInput
  }

  export type LeaveCreateWithoutHistoryInput = {
    id?: string
    type: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    duration: number
    reason: string
    status?: $Enums.LeaveStatus
    comment?: string | null
    documentUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLeavesInput
    reviewer?: UserCreateNestedOneWithoutReviewsInput
  }

  export type LeaveUncheckedCreateWithoutHistoryInput = {
    id?: string
    userId: string
    type: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    duration: number
    reason: string
    status?: $Enums.LeaveStatus
    reviewedBy?: string | null
    comment?: string | null
    documentUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaveCreateOrConnectWithoutHistoryInput = {
    where: LeaveWhereUniqueInput
    create: XOR<LeaveCreateWithoutHistoryInput, LeaveUncheckedCreateWithoutHistoryInput>
  }

  export type UserCreateWithoutLeaveHistoryInput = {
    id?: string
    name: string
    email: string
    matricule: string
    password: string
    verificationCode?: string | null
    verificationExpiration?: Date | string | null
    resetToken?: string | null
    resetTokenExpiration?: Date | string | null
    isVerified?: boolean
    lastLogin?: Date | string
    role?: $Enums.Role
    createdAt?: Date | string
    leaves?: LeaveCreateNestedManyWithoutUserInput
    balances?: LeaveBalanceCreateNestedManyWithoutUserInput
    reviews?: LeaveCreateNestedManyWithoutReviewerInput
  }

  export type UserUncheckedCreateWithoutLeaveHistoryInput = {
    id?: string
    name: string
    email: string
    matricule: string
    password: string
    verificationCode?: string | null
    verificationExpiration?: Date | string | null
    resetToken?: string | null
    resetTokenExpiration?: Date | string | null
    isVerified?: boolean
    lastLogin?: Date | string
    role?: $Enums.Role
    createdAt?: Date | string
    leaves?: LeaveUncheckedCreateNestedManyWithoutUserInput
    balances?: LeaveBalanceUncheckedCreateNestedManyWithoutUserInput
    reviews?: LeaveUncheckedCreateNestedManyWithoutReviewerInput
  }

  export type UserCreateOrConnectWithoutLeaveHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLeaveHistoryInput, UserUncheckedCreateWithoutLeaveHistoryInput>
  }

  export type LeaveUpsertWithoutHistoryInput = {
    update: XOR<LeaveUpdateWithoutHistoryInput, LeaveUncheckedUpdateWithoutHistoryInput>
    create: XOR<LeaveCreateWithoutHistoryInput, LeaveUncheckedCreateWithoutHistoryInput>
    where?: LeaveWhereInput
  }

  export type LeaveUpdateToOneWithWhereWithoutHistoryInput = {
    where?: LeaveWhereInput
    data: XOR<LeaveUpdateWithoutHistoryInput, LeaveUncheckedUpdateWithoutHistoryInput>
  }

  export type LeaveUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLeavesNestedInput
    reviewer?: UserUpdateOneWithoutReviewsNestedInput
  }

  export type LeaveUncheckedUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutLeaveHistoryInput = {
    update: XOR<UserUpdateWithoutLeaveHistoryInput, UserUncheckedUpdateWithoutLeaveHistoryInput>
    create: XOR<UserCreateWithoutLeaveHistoryInput, UserUncheckedCreateWithoutLeaveHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLeaveHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLeaveHistoryInput, UserUncheckedUpdateWithoutLeaveHistoryInput>
  }

  export type UserUpdateWithoutLeaveHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    matricule?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    verificationExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leaves?: LeaveUpdateManyWithoutUserNestedInput
    balances?: LeaveBalanceUpdateManyWithoutUserNestedInput
    reviews?: LeaveUpdateManyWithoutReviewerNestedInput
  }

  export type UserUncheckedUpdateWithoutLeaveHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    matricule?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    verificationExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leaves?: LeaveUncheckedUpdateManyWithoutUserNestedInput
    balances?: LeaveBalanceUncheckedUpdateManyWithoutUserNestedInput
    reviews?: LeaveUncheckedUpdateManyWithoutReviewerNestedInput
  }

  export type LeaveCreateManyUserInput = {
    id?: string
    type: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    duration: number
    reason: string
    status?: $Enums.LeaveStatus
    reviewedBy?: string | null
    comment?: string | null
    documentUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaveBalanceCreateManyUserInput = {
    id?: string
    type: $Enums.LeaveType
    year: number
    total: number
    used?: number
  }

  export type LeaveCreateManyReviewerInput = {
    id?: string
    userId: string
    type: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    duration: number
    reason: string
    status?: $Enums.LeaveStatus
    comment?: string | null
    documentUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaveHistoryCreateManyByUserInput = {
    id?: string
    leaveId: string
    action: $Enums.HistoryAction
    createdAt?: Date | string
    note?: string | null
  }

  export type LeaveUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewer?: UserUpdateOneWithoutReviewsNestedInput
    history?: LeaveHistoryUpdateManyWithoutLeaveNestedInput
  }

  export type LeaveUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: LeaveHistoryUncheckedUpdateManyWithoutLeaveNestedInput
  }

  export type LeaveUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveBalanceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    year?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    used?: IntFieldUpdateOperationsInput | number
  }

  export type LeaveBalanceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    year?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    used?: IntFieldUpdateOperationsInput | number
  }

  export type LeaveBalanceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    year?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    used?: IntFieldUpdateOperationsInput | number
  }

  export type LeaveUpdateWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLeavesNestedInput
    history?: LeaveHistoryUpdateManyWithoutLeaveNestedInput
  }

  export type LeaveUncheckedUpdateWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: LeaveHistoryUncheckedUpdateManyWithoutLeaveNestedInput
  }

  export type LeaveUncheckedUpdateManyWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveHistoryUpdateWithoutByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumHistoryActionFieldUpdateOperationsInput | $Enums.HistoryAction
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    leave?: LeaveUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type LeaveHistoryUncheckedUpdateWithoutByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveId?: StringFieldUpdateOperationsInput | string
    action?: EnumHistoryActionFieldUpdateOperationsInput | $Enums.HistoryAction
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LeaveHistoryUncheckedUpdateManyWithoutByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveId?: StringFieldUpdateOperationsInput | string
    action?: EnumHistoryActionFieldUpdateOperationsInput | $Enums.HistoryAction
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LeaveHistoryCreateManyLeaveInput = {
    id?: string
    action: $Enums.HistoryAction
    byUserId: string
    createdAt?: Date | string
    note?: string | null
  }

  export type LeaveHistoryUpdateWithoutLeaveInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumHistoryActionFieldUpdateOperationsInput | $Enums.HistoryAction
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    byUser?: UserUpdateOneRequiredWithoutLeaveHistoryNestedInput
  }

  export type LeaveHistoryUncheckedUpdateWithoutLeaveInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumHistoryActionFieldUpdateOperationsInput | $Enums.HistoryAction
    byUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LeaveHistoryUncheckedUpdateManyWithoutLeaveInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumHistoryActionFieldUpdateOperationsInput | $Enums.HistoryAction
    byUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}