// Escape sequence	


// \0	null character (U+0000 NULL)
// \'	single quote (U+0027 APOSTROPHE)
// \"	double quote (U+0022 QUOTATION MARK)
// \\	backslash (U+005C REVERSE SOLIDUS)
// \n	newline (U+000A LINE FEED; LF)
// \r	carriage return (U+000D CARRIAGE RETURN; CR)
// \v	vertical tab (U+000B LINE TABULATION)
// \t	tab (U+0009 CHARACTER TABULATION)
// \b	backspace (U+0008 BACKSPACE)
// \f	form feed (U+000C FORM FEED)
// \uXXXX …where XXXX is exactly 4 hex digits in the range 0000–FFFF; e.g., \u000A is the same as \n (LINE FEED); \u0021 is "!"	Unicode code point between U+0000 and U+FFFF (the Unicode Basic Multilingual Plane)
// \u{X}…\u{XXXXXX} …where X…XXXXXX is 1–6 hex digits in the range 0–10FFFF; e.g., \u{A} is the same as \n (LINE FEED); \u{21} is "!"	Unicode code point between U+0000 and U+10FFFF (the entirety of Unicode)
// \xXX …where XX is exactly 2 hex digits in the range 00–FF; e.g., \x0A is the same as \n (LINE FEED); \x21 is "!"	Unicode code point between U+0000 and U+00FF (the Basic Latin and Latin-1 Supplement blocks; equivalent to ISO-8859-1)