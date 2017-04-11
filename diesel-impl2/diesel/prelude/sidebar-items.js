initSidebarItems({"trait":[["BelongingToDsl",""],["BoxedDsl","Boxes the pieces of a query into a single type. This is useful for cases where you want to conditionally modify a query, but need the type to remain the same. The backend must be specified as part of this. It is not possible to box a query and have it be useable on multiple backends."],["CountDsl","Adds a simple `count` function to queries. Automatically implemented for all types which implement `SelectDsl`."],["DistinctDsl","Adds the `DISTINCT` keyword to a query."],["ExecuteDsl",""],["FilterDsl","Adds to the `WHERE` clause of a query. If there is already a `WHERE` clause, the result will be `old AND new`. This is automatically implemented for the various query builder types."],["FindDsl","Attempts to find a single record from the given table by primary key."],["GroupedBy",""],["Insertable","Represents that a structure can be used to to insert a new row into the database. This is automatically implemented for `&[T]` and `&Vec<T>` for inserting more than one record."],["JoinTo","Indicates that two tables can be used together in a JOIN clause. Implementations of this trait will be generated for you automatically by the [association annotations](FIXME: Add link) from codegen."],["LimitDsl","Sets the limit clause of a query. If there was already a limit clause, it will be overridden. This is automatically implemented for the various query builder types."],["LoadDsl","Methods to execute a query given a connection. These are automatically implemented for the various query types."],["OffsetDsl","Sets the offset clause of a query. If there was already a offset clause, it will be overridden. This is automatically implemented for the various query builder types."],["OrderDsl","Sets the order clause of a query. If there was already a order clause, it will be overridden. The expression passed to `order` must actually be valid for the query. See also: `.desc()` and `.asc()`"],["SaveChangesDsl",""],["SelectDsl","Sets the select clause of a query. If there was already a select clause, it will be overridden. The expression passed to `select` must actually be valid for the query (only contains columns from the target table, doesn't mix aggregate + non-aggregate expressions, etc)."],["WithDsl","Adds an additional expression to the FROM clause. This is useful for things like full text search, where you need to access the result of an expensive computation for the where clause that shouldn't be redone for each row, such as `plain_to_tsquery`. See `.aliased` for more"]]});