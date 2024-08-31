grammar Torch;

options {
    language = TypeScript;
}

prog: statements+ EOF;  // EOF (end of file) то есть парсер зачитает весь файл

statements: 
    letDeclaration 
    | letAssignment 
    | ifStatement
    | whileStatement 
    | returnStatement
    | expr;

letDeclaration: 'let' ID ('=' expr)?;
letAssignment: ID '=' expr;

ifStatement: 'if' '(' expr ')' block;

whileStatement: 'while' '(' expr ')' block;

// functionsDeclarations: 'func' ID '(' (ID (',' ID)*)? ')' block;
// functionCall: ID '(' (expr (',' expr)*)? ')';

block: '{' statements+ '}';


comparisionOperator: '==' | '!=' | '<' | '>' | '<=' | '>=';
returnStatement: 'return' expr?;

expr: 
    expr ('*' | '/') expr
    |expr ('+' | '-') expr
    | expr comparisionOperator expr
    | '(' expr ')'
    | INT
    | ID
    ;


ID: [a-zA-Z_*][a-zA-Z0-9_]*;
INT: [0-9]+;
WS: [ \t\r\n]+ -> skip;
COMMENT: '//' ~[\r\n]* -> skip;