program -> sep0 stmt (sep1 stmt {% d=>d[1] %}):* sep0 {% d=>[d[1]].concat(d[2]) %}

# stmt
stmt -> exp {% id %}
	  | defstmt {% id %}
	  | printstmt {% id %}

# printstmt
printstmt -> "(" sep0 "print-num" sep1 exp sep0 ")" {% d=>[d[2],d[4]] %}
		   | "(" sep0 "print-bool" sep1 exp sep0 ")" {% d=>[d[2],d[4]] %}

# exp
exp -> bool {% id %}
	 | number {% id %}
	 | id {% id %}
	 | numop {% id %}
	 | logicalop {% id %}
	 | funexp {% id %}
     | funcall {% id %}
	 | ifexp {% id %}

# num op
numop -> "(" sep0 "+" sep1 exp (sep1 exp {% d=>d[1] %}):+ sep0 ")" {% d=>[d[2],d[4]].concat(d[5]) %}
	   | "(" sep0 "-" sep1 exp sep1 exp sep0 ")" {% d=>[d[2],d[4],d[6]] %}
	   | "(" sep0 "*" sep1 exp (sep1 exp {% d=>d[1] %}):+ sep0 ")" {% d=>[d[2],d[4]].concat(d[5]) %}
	   | "(" sep0 "/" sep1 exp sep1 exp sep0 ")" {% d=>[d[2],d[4],d[6]] %}
	   | "(" sep0 "mod" sep1 exp sep1 exp sep0 ")" {% d=>[d[2],d[4],d[6]] %}
	   | "(" sep0 ">" sep1 exp sep1 exp sep0 ")" {% d=>[d[2],d[4],d[6]] %}
	   | "(" sep0 "<" sep1 exp sep1 exp sep0 ")" {% d=>[d[2],d[4],d[6]] %}
	   | "(" sep0 "=" sep1 exp (sep1 exp {% d=>d[1] %}):+ sep0 ")" {% d=>[d[2],d[4]].concat(d[5]) %}

# logical op
logicalop -> "(" sep0 "and" sep1 exp (sep1 exp {% d=>d[1] %}):+ sep0 ")" {% d=>[d[2],d[4]].concat(d[5]) %}
		   | "(" sep0 "or" sep1 exp (sep1 exp {% d=>d[1] %}):+ sep0 ")" {% d=>[d[2],d[4]].concat(d[5]) %}
		   | "(" sep0 "not" sep1 exp sep0 ")" {% d=>[d[2],d[4]] %}

# def stmt
defstmt -> "(" sep0 "define" sep1 id sep1 exp sep0 ")" {% d=>[d[2],d[4],d[6]] %}

# fun exp
funexp -> "(" sep0 "fun" sep1 funids sep1 exp sep0 ")" {% d=>[d[2],d[4],d[6]] %}
		| "(" sep0 "lambda" sep1 funids sep1 exp sep0 ")" {% d=>[d[2],d[4],d[6]] %}
funids -> "(" sep0 ")" {% d=>[] %}
		|"(" sep0 idlist sep0 ")" {% d=>d[2] %}
idlist -> (id sep1 {% d=>d[0] %}):* id {% d=>d.flat() %}

# fun call
funcall -> "(" sep0 id (sep1 exp {% d=>d[1] %}):* sep0 ")" {% d=>[d[2]].concat(d[3]) %}
		 | "(" sep0 funexp (sep1 exp {% d=>d[1] %}):* sep0 ")" {% d=>[d[2]].concat(d[3]) %}

# if exp
ifexp -> "(" sep0 "if" sep1 exp sep1 exp sep1 exp sep0 ")" {% d=>[d[2],d[4],d[6],d[8]] %}

# tokens
bool -> "#t" {% d=>true %}
	  | "#f" {% d=>false %}
id -> letter (letter | digit | "-"):* {% d=>d.flat(3).join('') %}
number -> "0" {% d=>0 %}
		| [1-9] digit:* {% d=>parseInt(d.flat().join('')) %}
		| "-" [1-9] digit:* {% d=>parseInt(d.flat().join('')) %}
digit -> [0-9] {% id %}
letter -> [a-z]
sep0 -> _:* {% d=>null %}
sep1 -> _:+ {% d=>null %}
_ -> [\t\n\r\s] {% d=>null %}
