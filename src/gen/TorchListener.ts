// Generated from Torch.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


import { ProgContext } from "./TorchParser.js";
import { StatementsContext } from "./TorchParser.js";
import { LetDeclarationContext } from "./TorchParser.js";
import { LetAssignmentContext } from "./TorchParser.js";
import { IfStatementContext } from "./TorchParser.js";
import { WhileStatementContext } from "./TorchParser.js";
import { FunctionsDeclarationsContext } from "./TorchParser.js";
import { FunctionCallContext } from "./TorchParser.js";
import { BlockContext } from "./TorchParser.js";
import { ComparisionOperatorContext } from "./TorchParser.js";
import { ReturnStatementContext } from "./TorchParser.js";
import { ExprContext } from "./TorchParser.js";
import { ArgContext } from "./TorchParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `TorchParser`.
 */
export default class TorchListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `TorchParser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `TorchParser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;
	/**
	 * Enter a parse tree produced by `TorchParser.statements`.
	 * @param ctx the parse tree
	 */
	enterStatements?: (ctx: StatementsContext) => void;
	/**
	 * Exit a parse tree produced by `TorchParser.statements`.
	 * @param ctx the parse tree
	 */
	exitStatements?: (ctx: StatementsContext) => void;
	/**
	 * Enter a parse tree produced by `TorchParser.letDeclaration`.
	 * @param ctx the parse tree
	 */
	enterLetDeclaration?: (ctx: LetDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `TorchParser.letDeclaration`.
	 * @param ctx the parse tree
	 */
	exitLetDeclaration?: (ctx: LetDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `TorchParser.letAssignment`.
	 * @param ctx the parse tree
	 */
	enterLetAssignment?: (ctx: LetAssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `TorchParser.letAssignment`.
	 * @param ctx the parse tree
	 */
	exitLetAssignment?: (ctx: LetAssignmentContext) => void;
	/**
	 * Enter a parse tree produced by `TorchParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `TorchParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Enter a parse tree produced by `TorchParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	enterWhileStatement?: (ctx: WhileStatementContext) => void;
	/**
	 * Exit a parse tree produced by `TorchParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	exitWhileStatement?: (ctx: WhileStatementContext) => void;
	/**
	 * Enter a parse tree produced by `TorchParser.functionsDeclarations`.
	 * @param ctx the parse tree
	 */
	enterFunctionsDeclarations?: (ctx: FunctionsDeclarationsContext) => void;
	/**
	 * Exit a parse tree produced by `TorchParser.functionsDeclarations`.
	 * @param ctx the parse tree
	 */
	exitFunctionsDeclarations?: (ctx: FunctionsDeclarationsContext) => void;
	/**
	 * Enter a parse tree produced by `TorchParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by `TorchParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Enter a parse tree produced by `TorchParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `TorchParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;
	/**
	 * Enter a parse tree produced by `TorchParser.comparisionOperator`.
	 * @param ctx the parse tree
	 */
	enterComparisionOperator?: (ctx: ComparisionOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `TorchParser.comparisionOperator`.
	 * @param ctx the parse tree
	 */
	exitComparisionOperator?: (ctx: ComparisionOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `TorchParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	enterReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Exit a parse tree produced by `TorchParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	exitReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Enter a parse tree produced by `TorchParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `TorchParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;
	/**
	 * Enter a parse tree produced by `TorchParser.arg`.
	 * @param ctx the parse tree
	 */
	enterArg?: (ctx: ArgContext) => void;
	/**
	 * Exit a parse tree produced by `TorchParser.arg`.
	 * @param ctx the parse tree
	 */
	exitArg?: (ctx: ArgContext) => void;
}

