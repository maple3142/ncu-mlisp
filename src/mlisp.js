// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "program$ebnf$1", "symbols": []},
    {"name": "program$ebnf$1$subexpression$1", "symbols": ["sep1", "stmt"], "postprocess": d=>d[1]},
    {"name": "program$ebnf$1", "symbols": ["program$ebnf$1", "program$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "program", "symbols": ["sep0", "stmt", "program$ebnf$1", "sep0"], "postprocess": d=>[d[1]].concat(d[2])},
    {"name": "stmt", "symbols": ["exp"], "postprocess": id},
    {"name": "stmt", "symbols": ["defstmt"], "postprocess": id},
    {"name": "stmt", "symbols": ["printstmt"], "postprocess": id},
    {"name": "printstmt$string$1", "symbols": [{"literal":"p"}, {"literal":"r"}, {"literal":"i"}, {"literal":"n"}, {"literal":"t"}, {"literal":"-"}, {"literal":"n"}, {"literal":"u"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "printstmt", "symbols": [{"literal":"("}, "sep0", "printstmt$string$1", "sep1", "exp", "sep0", {"literal":")"}], "postprocess": d=>[d[2],d[4]]},
    {"name": "printstmt$string$2", "symbols": [{"literal":"p"}, {"literal":"r"}, {"literal":"i"}, {"literal":"n"}, {"literal":"t"}, {"literal":"-"}, {"literal":"b"}, {"literal":"o"}, {"literal":"o"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "printstmt", "symbols": [{"literal":"("}, "sep0", "printstmt$string$2", "sep1", "exp", "sep0", {"literal":")"}], "postprocess": d=>[d[2],d[4]]},
    {"name": "exp", "symbols": ["bool"], "postprocess": id},
    {"name": "exp", "symbols": ["number"], "postprocess": id},
    {"name": "exp", "symbols": ["id"], "postprocess": id},
    {"name": "exp", "symbols": ["numop"], "postprocess": id},
    {"name": "exp", "symbols": ["logicalop"], "postprocess": id},
    {"name": "exp", "symbols": ["funexp"], "postprocess": id},
    {"name": "exp", "symbols": ["funcall"], "postprocess": id},
    {"name": "exp", "symbols": ["ifexp"], "postprocess": id},
    {"name": "numop$ebnf$1$subexpression$1", "symbols": ["sep1", "exp"], "postprocess": d=>d[1]},
    {"name": "numop$ebnf$1", "symbols": ["numop$ebnf$1$subexpression$1"]},
    {"name": "numop$ebnf$1$subexpression$2", "symbols": ["sep1", "exp"], "postprocess": d=>d[1]},
    {"name": "numop$ebnf$1", "symbols": ["numop$ebnf$1", "numop$ebnf$1$subexpression$2"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "numop", "symbols": [{"literal":"("}, "sep0", {"literal":"+"}, "sep1", "exp", "numop$ebnf$1", "sep0", {"literal":")"}], "postprocess": d=>[d[2],d[4]].concat(d[5])},
    {"name": "numop", "symbols": [{"literal":"("}, "sep0", {"literal":"-"}, "sep1", "exp", "sep1", "exp", "sep0", {"literal":")"}], "postprocess": d=>[d[2],d[4],d[6]]},
    {"name": "numop$ebnf$2$subexpression$1", "symbols": ["sep1", "exp"], "postprocess": d=>d[1]},
    {"name": "numop$ebnf$2", "symbols": ["numop$ebnf$2$subexpression$1"]},
    {"name": "numop$ebnf$2$subexpression$2", "symbols": ["sep1", "exp"], "postprocess": d=>d[1]},
    {"name": "numop$ebnf$2", "symbols": ["numop$ebnf$2", "numop$ebnf$2$subexpression$2"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "numop", "symbols": [{"literal":"("}, "sep0", {"literal":"*"}, "sep1", "exp", "numop$ebnf$2", "sep0", {"literal":")"}], "postprocess": d=>[d[2],d[4]].concat(d[5])},
    {"name": "numop", "symbols": [{"literal":"("}, "sep0", {"literal":"/"}, "sep1", "exp", "sep1", "exp", "sep0", {"literal":")"}], "postprocess": d=>[d[2],d[4],d[6]]},
    {"name": "numop$string$1", "symbols": [{"literal":"m"}, {"literal":"o"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "numop", "symbols": [{"literal":"("}, "sep0", "numop$string$1", "sep1", "exp", "sep1", "exp", "sep0", {"literal":")"}], "postprocess": d=>[d[2],d[4],d[6]]},
    {"name": "numop", "symbols": [{"literal":"("}, "sep0", {"literal":">"}, "sep1", "exp", "sep1", "exp", "sep0", {"literal":")"}], "postprocess": d=>[d[2],d[4],d[6]]},
    {"name": "numop", "symbols": [{"literal":"("}, "sep0", {"literal":"<"}, "sep1", "exp", "sep1", "exp", "sep0", {"literal":")"}], "postprocess": d=>[d[2],d[4],d[6]]},
    {"name": "numop$ebnf$3$subexpression$1", "symbols": ["sep1", "exp"], "postprocess": d=>d[1]},
    {"name": "numop$ebnf$3", "symbols": ["numop$ebnf$3$subexpression$1"]},
    {"name": "numop$ebnf$3$subexpression$2", "symbols": ["sep1", "exp"], "postprocess": d=>d[1]},
    {"name": "numop$ebnf$3", "symbols": ["numop$ebnf$3", "numop$ebnf$3$subexpression$2"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "numop", "symbols": [{"literal":"("}, "sep0", {"literal":"="}, "sep1", "exp", "numop$ebnf$3", "sep0", {"literal":")"}], "postprocess": d=>[d[2],d[4]].concat(d[5])},
    {"name": "logicalop$string$1", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "logicalop$ebnf$1$subexpression$1", "symbols": ["sep1", "exp"], "postprocess": d=>d[1]},
    {"name": "logicalop$ebnf$1", "symbols": ["logicalop$ebnf$1$subexpression$1"]},
    {"name": "logicalop$ebnf$1$subexpression$2", "symbols": ["sep1", "exp"], "postprocess": d=>d[1]},
    {"name": "logicalop$ebnf$1", "symbols": ["logicalop$ebnf$1", "logicalop$ebnf$1$subexpression$2"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "logicalop", "symbols": [{"literal":"("}, "sep0", "logicalop$string$1", "sep1", "exp", "logicalop$ebnf$1", "sep0", {"literal":")"}], "postprocess": d=>[d[2],d[4]].concat(d[5])},
    {"name": "logicalop$string$2", "symbols": [{"literal":"o"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "logicalop$ebnf$2$subexpression$1", "symbols": ["sep1", "exp"], "postprocess": d=>d[1]},
    {"name": "logicalop$ebnf$2", "symbols": ["logicalop$ebnf$2$subexpression$1"]},
    {"name": "logicalop$ebnf$2$subexpression$2", "symbols": ["sep1", "exp"], "postprocess": d=>d[1]},
    {"name": "logicalop$ebnf$2", "symbols": ["logicalop$ebnf$2", "logicalop$ebnf$2$subexpression$2"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "logicalop", "symbols": [{"literal":"("}, "sep0", "logicalop$string$2", "sep1", "exp", "logicalop$ebnf$2", "sep0", {"literal":")"}], "postprocess": d=>[d[2],d[4]].concat(d[5])},
    {"name": "logicalop$string$3", "symbols": [{"literal":"n"}, {"literal":"o"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "logicalop", "symbols": [{"literal":"("}, "sep0", "logicalop$string$3", "sep1", "exp", "sep0", {"literal":")"}], "postprocess": d=>[d[2],d[4]]},
    {"name": "defstmt$string$1", "symbols": [{"literal":"d"}, {"literal":"e"}, {"literal":"f"}, {"literal":"i"}, {"literal":"n"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "defstmt", "symbols": [{"literal":"("}, "sep0", "defstmt$string$1", "sep1", "id", "sep1", "exp", "sep0", {"literal":")"}], "postprocess": d=>[d[2],d[4],d[6]]},
    {"name": "funexp$string$1", "symbols": [{"literal":"f"}, {"literal":"u"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "funexp", "symbols": [{"literal":"("}, "sep0", "funexp$string$1", "sep1", "funids", "sep1", "exp", "sep0", {"literal":")"}], "postprocess": d=>[d[2],d[4],d[6]]},
    {"name": "funexp$string$2", "symbols": [{"literal":"l"}, {"literal":"a"}, {"literal":"m"}, {"literal":"b"}, {"literal":"d"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "funexp", "symbols": [{"literal":"("}, "sep0", "funexp$string$2", "sep1", "funids", "sep1", "exp", "sep0", {"literal":")"}], "postprocess": d=>[d[2],d[4],d[6]]},
    {"name": "funids", "symbols": [{"literal":"("}, "sep0", {"literal":")"}], "postprocess": d=>[]},
    {"name": "funids", "symbols": [{"literal":"("}, "sep0", "idlist", "sep0", {"literal":")"}], "postprocess": d=>d[2]},
    {"name": "idlist$ebnf$1", "symbols": []},
    {"name": "idlist$ebnf$1$subexpression$1", "symbols": ["id", "sep1"], "postprocess": d=>d[0]},
    {"name": "idlist$ebnf$1", "symbols": ["idlist$ebnf$1", "idlist$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "idlist", "symbols": ["idlist$ebnf$1", "id"], "postprocess": d=>d.flat()},
    {"name": "funcall$ebnf$1", "symbols": []},
    {"name": "funcall$ebnf$1$subexpression$1", "symbols": ["sep1", "exp"], "postprocess": d=>d[1]},
    {"name": "funcall$ebnf$1", "symbols": ["funcall$ebnf$1", "funcall$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "funcall", "symbols": [{"literal":"("}, "sep0", "id", "funcall$ebnf$1", "sep0", {"literal":")"}], "postprocess": d=>[d[2]].concat(d[3])},
    {"name": "funcall$ebnf$2", "symbols": []},
    {"name": "funcall$ebnf$2$subexpression$1", "symbols": ["sep1", "exp"], "postprocess": d=>d[1]},
    {"name": "funcall$ebnf$2", "symbols": ["funcall$ebnf$2", "funcall$ebnf$2$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "funcall", "symbols": [{"literal":"("}, "sep0", "funexp", "funcall$ebnf$2", "sep0", {"literal":")"}], "postprocess": d=>[d[2]].concat(d[3])},
    {"name": "ifexp$string$1", "symbols": [{"literal":"i"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ifexp", "symbols": [{"literal":"("}, "sep0", "ifexp$string$1", "sep1", "exp", "sep1", "exp", "sep1", "exp", "sep0", {"literal":")"}], "postprocess": d=>[d[2],d[4],d[6],d[8]]},
    {"name": "bool$string$1", "symbols": [{"literal":"#"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "bool", "symbols": ["bool$string$1"], "postprocess": d=>true},
    {"name": "bool$string$2", "symbols": [{"literal":"#"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "bool", "symbols": ["bool$string$2"], "postprocess": d=>false},
    {"name": "id$ebnf$1", "symbols": []},
    {"name": "id$ebnf$1$subexpression$1", "symbols": ["letter"]},
    {"name": "id$ebnf$1$subexpression$1", "symbols": ["digit"]},
    {"name": "id$ebnf$1$subexpression$1", "symbols": [{"literal":"-"}]},
    {"name": "id$ebnf$1", "symbols": ["id$ebnf$1", "id$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "id", "symbols": ["letter", "id$ebnf$1"], "postprocess": d=>d.flat(3).join('')},
    {"name": "number", "symbols": [{"literal":"0"}], "postprocess": d=>0},
    {"name": "number$ebnf$1", "symbols": []},
    {"name": "number$ebnf$1", "symbols": ["number$ebnf$1", "digit"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "number", "symbols": [/[1-9]/, "number$ebnf$1"], "postprocess": d=>parseInt(d.flat().join(''))},
    {"name": "number$ebnf$2", "symbols": []},
    {"name": "number$ebnf$2", "symbols": ["number$ebnf$2", "digit"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "number", "symbols": [{"literal":"-"}, /[1-9]/, "number$ebnf$2"], "postprocess": d=>parseInt(d.flat().join(''))},
    {"name": "digit", "symbols": [/[0-9]/], "postprocess": id},
    {"name": "letter", "symbols": [/[a-z]/]},
    {"name": "sep0$ebnf$1", "symbols": []},
    {"name": "sep0$ebnf$1", "symbols": ["sep0$ebnf$1", "_"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "sep0", "symbols": ["sep0$ebnf$1"], "postprocess": d=>null},
    {"name": "sep1$ebnf$1", "symbols": ["_"]},
    {"name": "sep1$ebnf$1", "symbols": ["sep1$ebnf$1", "_"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "sep1", "symbols": ["sep1$ebnf$1"], "postprocess": d=>null},
    {"name": "_", "symbols": [/[\t\n\r\s]/], "postprocess": d=>null}
]
  , ParserStart: "program"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
