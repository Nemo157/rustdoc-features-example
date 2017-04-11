(function() {var implementors = {};
implementors["chrono"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/time/duration/struct.Duration.html\" title=\"struct std::time::duration::Duration\">Duration</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/time/duration/struct.Duration.html\" title=\"struct std::time::duration::Duration\">Duration</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/time/duration/struct.Duration.html\" title=\"struct std::time::duration::Duration\">Duration</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/time/struct.Instant.html\" title=\"struct std::time::Instant\">Instant</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/time/duration/struct.Duration.html\" title=\"struct std::time::duration::Duration\">Duration</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/time/struct.SystemTime.html\" title=\"struct std::time::SystemTime\">SystemTime</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;<a class=\"struct\" href=\"chrono/duration/struct.Duration.html\" title=\"struct chrono::duration::Duration\">Duration</a>&gt; for <a class=\"struct\" href=\"chrono/duration/struct.Duration.html\" title=\"struct chrono::duration::Duration\">Duration</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;<a class=\"struct\" href=\"chrono/duration/struct.Duration.html\" title=\"struct chrono::duration::Duration\">Duration</a>&gt; for <a class=\"struct\" href=\"time/struct.Timespec.html\" title=\"struct time::Timespec\">Timespec</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;<a class=\"struct\" href=\"chrono/duration/struct.Duration.html\" title=\"struct chrono::duration::Duration\">Duration</a>&gt; for <a class=\"struct\" href=\"time/struct.SteadyTime.html\" title=\"struct time::SteadyTime\">SteadyTime</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;<a class=\"struct\" href=\"chrono/duration/struct.Duration.html\" title=\"struct chrono::duration::Duration\">Duration</a>&gt; for <a class=\"struct\" href=\"time/struct.Tm.html\" title=\"struct time::Tm\">Tm</a>","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/collections/borrow/enum.Cow.html\" title=\"enum collections::borrow::Cow\">Cow</a>&lt;'a, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/collections/borrow/enum.Cow.html\" title=\"enum collections::borrow::Cow\">Cow</a>&lt;'a, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;&gt; for <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/collections/borrow/enum.Cow.html\" title=\"enum collections::borrow::Cow\">Cow</a>&lt;'a, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/collections/string/struct.String.html\" title=\"struct collections::string::String\">String</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;<a class=\"struct\" href=\"chrono/duration/struct.Duration.html\" title=\"struct chrono::duration::Duration\">Duration</a>&gt; for <a class=\"struct\" href=\"chrono/naive/date/struct.NaiveDate.html\" title=\"struct chrono::naive::date::NaiveDate\">NaiveDate</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;<a class=\"struct\" href=\"chrono/duration/struct.Duration.html\" title=\"struct chrono::duration::Duration\">Duration</a>&gt; for <a class=\"struct\" href=\"chrono/naive/time/struct.NaiveTime.html\" title=\"struct chrono::naive::time::NaiveTime\">NaiveTime</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;<a class=\"struct\" href=\"chrono/duration/struct.Duration.html\" title=\"struct chrono::duration::Duration\">Duration</a>&gt; for <a class=\"struct\" href=\"chrono/naive/datetime/struct.NaiveDateTime.html\" title=\"struct chrono::naive::datetime::NaiveDateTime\">NaiveDateTime</a>","impl&lt;Tz:&nbsp;<a class=\"trait\" href=\"chrono/offset/trait.TimeZone.html\" title=\"trait chrono::offset::TimeZone\">TimeZone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;<a class=\"struct\" href=\"chrono/duration/struct.Duration.html\" title=\"struct chrono::duration::Duration\">Duration</a>&gt; for <a class=\"struct\" href=\"chrono/date/struct.Date.html\" title=\"struct chrono::date::Date\">Date</a>&lt;Tz&gt;","impl&lt;Tz:&nbsp;<a class=\"trait\" href=\"chrono/offset/trait.TimeZone.html\" title=\"trait chrono::offset::TimeZone\">TimeZone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;<a class=\"struct\" href=\"chrono/duration/struct.Duration.html\" title=\"struct chrono::duration::Duration\">Duration</a>&gt; for <a class=\"struct\" href=\"chrono/datetime/struct.DateTime.html\" title=\"struct chrono::datetime::DateTime\">DateTime</a>&lt;Tz&gt;",];
implementors["diesel"] = ["impl&lt;Rhs&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;Rhs&gt; for <a class=\"struct\" href=\"diesel/expression/dsl/struct.now.html\" title=\"struct diesel::expression::dsl::now\">now</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Rhs: <a class=\"trait\" href=\"diesel/expression/trait.AsExpression.html\" title=\"trait diesel::expression::AsExpression\">AsExpression</a>&lt;<a class=\"struct\" href=\"diesel/expression/dsl/struct.now.html\" title=\"struct diesel::expression::dsl::now\">now</a>::<a class=\"trait\" href=\"diesel/expression/trait.Expression.html\" title=\"trait diesel::expression::Expression\">SqlType</a>::<a class=\"trait\" href=\"diesel/types/ops/trait.Add.html\" title=\"trait diesel::types::ops::Add\">Rhs</a>&gt;,&nbsp;</span>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;<a class=\"struct\" href=\"diesel/pg/data_types/struct.PgInterval.html\" title=\"struct diesel::pg::data_types::PgInterval\">PgInterval</a>&gt; for <a class=\"struct\" href=\"diesel/pg/data_types/struct.PgInterval.html\" title=\"struct diesel::pg::data_types::PgInterval\">PgInterval</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/time/duration/struct.Duration.html\" title=\"struct std::time::duration::Duration\">Duration</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/time/duration/struct.Duration.html\" title=\"struct std::time::duration::Duration\">Duration</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/time/duration/struct.Duration.html\" title=\"struct std::time::duration::Duration\">Duration</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/time/struct.Instant.html\" title=\"struct std::time::Instant\">Instant</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/time/duration/struct.Duration.html\" title=\"struct std::time::duration::Duration\">Duration</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/time/struct.SystemTime.html\" title=\"struct std::time::SystemTime\">SystemTime</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;<a class=\"struct\" href=\"time/duration/struct.Duration.html\" title=\"struct time::duration::Duration\">Duration</a>&gt; for <a class=\"struct\" href=\"chrono/naive/date/struct.NaiveDate.html\" title=\"struct chrono::naive::date::NaiveDate\">NaiveDate</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;<a class=\"struct\" href=\"time/duration/struct.Duration.html\" title=\"struct time::duration::Duration\">Duration</a>&gt; for <a class=\"struct\" href=\"chrono/naive/time/struct.NaiveTime.html\" title=\"struct chrono::naive::time::NaiveTime\">NaiveTime</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;<a class=\"struct\" href=\"time/duration/struct.Duration.html\" title=\"struct time::duration::Duration\">Duration</a>&gt; for <a class=\"struct\" href=\"chrono/naive/datetime/struct.NaiveDateTime.html\" title=\"struct chrono::naive::datetime::NaiveDateTime\">NaiveDateTime</a>","impl&lt;Tz&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;<a class=\"struct\" href=\"time/duration/struct.Duration.html\" title=\"struct time::duration::Duration\">Duration</a>&gt; for <a class=\"struct\" href=\"chrono/date/struct.Date.html\" title=\"struct chrono::date::Date\">Date</a>&lt;Tz&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Tz: <a class=\"trait\" href=\"chrono/offset/trait.TimeZone.html\" title=\"trait chrono::offset::TimeZone\">TimeZone</a>,&nbsp;</span>","impl&lt;Tz&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;<a class=\"struct\" href=\"time/duration/struct.Duration.html\" title=\"struct time::duration::Duration\">Duration</a>&gt; for <a class=\"struct\" href=\"chrono/datetime/struct.DateTime.html\" title=\"struct chrono::datetime::DateTime\">DateTime</a>&lt;Tz&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Tz: <a class=\"trait\" href=\"chrono/offset/trait.TimeZone.html\" title=\"trait chrono::offset::TimeZone\">TimeZone</a>,&nbsp;</span>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;<a class=\"struct\" href=\"time/duration/struct.Duration.html\" title=\"struct time::duration::Duration\">Duration</a>&gt; for <a class=\"struct\" href=\"time/duration/struct.Duration.html\" title=\"struct time::duration::Duration\">Duration</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;<a class=\"struct\" href=\"time/duration/struct.Duration.html\" title=\"struct time::duration::Duration\">Duration</a>&gt; for <a class=\"struct\" href=\"time/struct.Timespec.html\" title=\"struct time::Timespec\">Timespec</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;<a class=\"struct\" href=\"time/duration/struct.Duration.html\" title=\"struct time::duration::Duration\">Duration</a>&gt; for <a class=\"struct\" href=\"time/struct.SteadyTime.html\" title=\"struct time::SteadyTime\">SteadyTime</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;<a class=\"struct\" href=\"time/duration/struct.Duration.html\" title=\"struct time::duration::Duration\">Duration</a>&gt; for <a class=\"struct\" href=\"time/struct.Tm.html\" title=\"struct time::Tm\">Tm</a>","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/collections/borrow/enum.Cow.html\" title=\"enum collections::borrow::Cow\">Cow</a>&lt;'a, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/collections/borrow/enum.Cow.html\" title=\"enum collections::borrow::Cow\">Cow</a>&lt;'a, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;&gt; for <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/collections/borrow/enum.Cow.html\" title=\"enum collections::borrow::Cow\">Cow</a>&lt;'a, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/collections/string/struct.String.html\" title=\"struct collections::string::String\">String</a>",];
implementors["libc"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/time/duration/struct.Duration.html\" title=\"struct std::time::duration::Duration\">Duration</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/time/duration/struct.Duration.html\" title=\"struct std::time::duration::Duration\">Duration</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/time/duration/struct.Duration.html\" title=\"struct std::time::duration::Duration\">Duration</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/time/struct.Instant.html\" title=\"struct std::time::Instant\">Instant</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/time/duration/struct.Duration.html\" title=\"struct std::time::duration::Duration\">Duration</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/time/struct.SystemTime.html\" title=\"struct std::time::SystemTime\">SystemTime</a>","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/collections/borrow/enum.Cow.html\" title=\"enum collections::borrow::Cow\">Cow</a>&lt;'a, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/collections/borrow/enum.Cow.html\" title=\"enum collections::borrow::Cow\">Cow</a>&lt;'a, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;&gt; for <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/collections/borrow/enum.Cow.html\" title=\"enum collections::borrow::Cow\">Cow</a>&lt;'a, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/collections/string/struct.String.html\" title=\"struct collections::string::String\">String</a>",];
implementors["num"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/time/duration/struct.Duration.html\" title=\"struct std::time::duration::Duration\">Duration</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/time/duration/struct.Duration.html\" title=\"struct std::time::duration::Duration\">Duration</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/time/duration/struct.Duration.html\" title=\"struct std::time::duration::Duration\">Duration</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/time/struct.Instant.html\" title=\"struct std::time::Instant\">Instant</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/time/duration/struct.Duration.html\" title=\"struct std::time::duration::Duration\">Duration</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/time/struct.SystemTime.html\" title=\"struct std::time::SystemTime\">SystemTime</a>","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/collections/borrow/enum.Cow.html\" title=\"enum collections::borrow::Cow\">Cow</a>&lt;'a, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/collections/borrow/enum.Cow.html\" title=\"enum collections::borrow::Cow\">Cow</a>&lt;'a, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;&gt; for <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/collections/borrow/enum.Cow.html\" title=\"enum collections::borrow::Cow\">Cow</a>&lt;'a, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/collections/string/struct.String.html\" title=\"struct collections::string::String\">String</a>",];
implementors["quickcheck"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/time/duration/struct.Duration.html\" title=\"struct std::time::duration::Duration\">Duration</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/time/duration/struct.Duration.html\" title=\"struct std::time::duration::Duration\">Duration</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/time/duration/struct.Duration.html\" title=\"struct std::time::duration::Duration\">Duration</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/time/struct.Instant.html\" title=\"struct std::time::Instant\">Instant</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/time/duration/struct.Duration.html\" title=\"struct std::time::duration::Duration\">Duration</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/time/struct.SystemTime.html\" title=\"struct std::time::SystemTime\">SystemTime</a>","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/collections/borrow/enum.Cow.html\" title=\"enum collections::borrow::Cow\">Cow</a>&lt;'a, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/collections/borrow/enum.Cow.html\" title=\"enum collections::borrow::Cow\">Cow</a>&lt;'a, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;&gt; for <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/collections/borrow/enum.Cow.html\" title=\"enum collections::borrow::Cow\">Cow</a>&lt;'a, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/collections/string/struct.String.html\" title=\"struct collections::string::String\">String</a>",];
implementors["regex_syntax"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/time/duration/struct.Duration.html\" title=\"struct std::time::duration::Duration\">Duration</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/time/duration/struct.Duration.html\" title=\"struct std::time::duration::Duration\">Duration</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/time/duration/struct.Duration.html\" title=\"struct std::time::duration::Duration\">Duration</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/time/struct.Instant.html\" title=\"struct std::time::Instant\">Instant</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/time/duration/struct.Duration.html\" title=\"struct std::time::duration::Duration\">Duration</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/time/struct.SystemTime.html\" title=\"struct std::time::SystemTime\">SystemTime</a>","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/collections/borrow/enum.Cow.html\" title=\"enum collections::borrow::Cow\">Cow</a>&lt;'a, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/collections/borrow/enum.Cow.html\" title=\"enum collections::borrow::Cow\">Cow</a>&lt;'a, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;&gt; for <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/collections/borrow/enum.Cow.html\" title=\"enum collections::borrow::Cow\">Cow</a>&lt;'a, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/collections/string/struct.String.html\" title=\"struct collections::string::String\">String</a>",];
implementors["time"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a> for <a class=\"struct\" href=\"time/struct.Duration.html\" title=\"struct time::Duration\">Duration</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;<a class=\"struct\" href=\"time/struct.Duration.html\" title=\"struct time::Duration\">Duration</a>&gt; for <a class=\"struct\" href=\"time/struct.Timespec.html\" title=\"struct time::Timespec\">Timespec</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;<a class=\"struct\" href=\"time/struct.Duration.html\" title=\"struct time::Duration\">Duration</a>&gt; for <a class=\"struct\" href=\"time/struct.SteadyTime.html\" title=\"struct time::SteadyTime\">SteadyTime</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Add.html\" title=\"trait core::ops::Add\">Add</a>&lt;<a class=\"struct\" href=\"time/struct.Duration.html\" title=\"struct time::Duration\">Duration</a>&gt; for <a class=\"struct\" href=\"time/struct.Tm.html\" title=\"struct time::Tm\">Tm</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
