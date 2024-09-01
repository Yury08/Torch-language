grammar Torch;

options {
    language = TypeScript;
}

prog: statements+ EOF;  // EOF (end of file) то есть парсер зачитает весь файл

statements: 
    letDeclaration 
    | letAssignment 
    | functionDeclaration
    | ifStatement
    | whileStatement 
    | returnStatement
    | functionCall
    | expr;

letDeclaration: 'let' ID ('=' expr)?;
letAssignment: ID '=' expr;

ifStatement: 'if' '(' expr ')' block;

whileStatement: 'while' '(' expr ')' block;

functionDeclaration: 'func' ID '(' parameters? ')' block;

parameters: (ID (',' ID)*)?; //  Определяет список параметров функции, разделенных запятыми.

functionCall: ID '(' arguments? ')';

arguments: (expr (',' expr)*)?; // Описывает список аргументов для вызова функции.


block: '{' statements+ '}';


comparisionOperator: '==' | '!=' | '<' | '>' | '<=' | '>=';
returnStatement: 'return' expr?;

expr:
    functionCall
    | expr ('*' | '/') expr
    | expr ('+' | '-') expr
    | expr comparisionOperator expr
    | '(' expr ')'
    | INT
    | ID
    ;

ID: [a-zA-Z_*][a-zA-Z0-9_]*;
INT: [0-9]+;
WS: [ \t\r\n]+ -> skip;
COMMENT: '//' ~[\r\n]* -> skip;