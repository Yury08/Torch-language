// Generated from Torch.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import TorchListener from "./TorchListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class TorchParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly ID = 22;
	public static readonly INT = 23;
	public static readonly WS = 24;
	public static readonly COMMENT = 25;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_prog = 0;
	public static readonly RULE_statements = 1;
	public static readonly RULE_letDeclaration = 2;
	public static readonly RULE_letAssignment = 3;
	public static readonly RULE_ifStatement = 4;
	public static readonly RULE_whileStatement = 5;
	public static readonly RULE_functionDeclaration = 6;
	public static readonly RULE_parameters = 7;
	public static readonly RULE_functionCall = 8;
	public static readonly RULE_arguments = 9;
	public static readonly RULE_block = 10;
	public static readonly RULE_comparisionOperator = 11;
	public static readonly RULE_returnStatement = 12;
	public static readonly RULE_expr = 13;
	public static readonly literalNames: (string | null)[] = [ null, "'let'", 
                                                            "'='", "'if'", 
                                                            "'('", "')'", 
                                                            "'while'", "'func'", 
                                                            "','", "'{'", 
                                                            "'}'", "'=='", 
                                                            "'!='", "'<'", 
                                                            "'>'", "'<='", 
                                                            "'>='", "'return'", 
                                                            "'*'", "'/'", 
                                                            "'+'", "'-'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             "ID", "INT", 
                                                             "WS", "COMMENT" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "statements", "letDeclaration", "letAssignment", "ifStatement", 
		"whileStatement", "functionDeclaration", "parameters", "functionCall", 
		"arguments", "block", "comparisionOperator", "returnStatement", "expr",
	];
	public get grammarFileName(): string { return "Torch.g4"; }
	public get literalNames(): (string | null)[] { return TorchParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return TorchParser.symbolicNames; }
	public get ruleNames(): string[] { return TorchParser.ruleNames; }
	public get serializedATN(): number[] { return TorchParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, TorchParser._ATN, TorchParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public prog(): ProgContext {
		let localctx: ProgContext = new ProgContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, TorchParser.RULE_prog);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 29;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 28;
				this.statements();
				}
				}
				this.state = 31;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 12714202) !== 0));
			this.state = 33;
			this.match(TorchParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statements(): StatementsContext {
		let localctx: StatementsContext = new StatementsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, TorchParser.RULE_statements);
		try {
			this.state = 43;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 35;
				this.letDeclaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 36;
				this.letAssignment();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 37;
				this.functionDeclaration();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 38;
				this.ifStatement();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 39;
				this.whileStatement();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 40;
				this.returnStatement();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 41;
				this.functionCall();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 42;
				this.expr(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public letDeclaration(): LetDeclarationContext {
		let localctx: LetDeclarationContext = new LetDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, TorchParser.RULE_letDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 45;
			this.match(TorchParser.T__0);
			this.state = 46;
			this.match(TorchParser.ID);
			this.state = 49;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===2) {
				{
				this.state = 47;
				this.match(TorchParser.T__1);
				this.state = 48;
				this.expr(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public letAssignment(): LetAssignmentContext {
		let localctx: LetAssignmentContext = new LetAssignmentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, TorchParser.RULE_letAssignment);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 51;
			this.match(TorchParser.ID);
			this.state = 52;
			this.match(TorchParser.T__1);
			this.state = 53;
			this.expr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ifStatement(): IfStatementContext {
		let localctx: IfStatementContext = new IfStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, TorchParser.RULE_ifStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 55;
			this.match(TorchParser.T__2);
			this.state = 56;
			this.match(TorchParser.T__3);
			this.state = 57;
			this.expr(0);
			this.state = 58;
			this.match(TorchParser.T__4);
			this.state = 59;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public whileStatement(): WhileStatementContext {
		let localctx: WhileStatementContext = new WhileStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, TorchParser.RULE_whileStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 61;
			this.match(TorchParser.T__5);
			this.state = 62;
			this.match(TorchParser.T__3);
			this.state = 63;
			this.expr(0);
			this.state = 64;
			this.match(TorchParser.T__4);
			this.state = 65;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionDeclaration(): FunctionDeclarationContext {
		let localctx: FunctionDeclarationContext = new FunctionDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, TorchParser.RULE_functionDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 67;
			this.match(TorchParser.T__6);
			this.state = 68;
			this.match(TorchParser.ID);
			this.state = 69;
			this.match(TorchParser.T__3);
			this.state = 71;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 70;
				this.parameters();
				}
				break;
			}
			this.state = 73;
			this.match(TorchParser.T__4);
			this.state = 74;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameters(): ParametersContext {
		let localctx: ParametersContext = new ParametersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, TorchParser.RULE_parameters);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 84;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===22) {
				{
				this.state = 76;
				this.match(TorchParser.ID);
				this.state = 81;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===8) {
					{
					{
					this.state = 77;
					this.match(TorchParser.T__7);
					this.state = 78;
					this.match(TorchParser.ID);
					}
					}
					this.state = 83;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionCall(): FunctionCallContext {
		let localctx: FunctionCallContext = new FunctionCallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, TorchParser.RULE_functionCall);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 86;
			this.match(TorchParser.ID);
			this.state = 87;
			this.match(TorchParser.T__3);
			this.state = 89;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				this.state = 88;
				this.arguments();
				}
				break;
			}
			this.state = 91;
			this.match(TorchParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arguments(): ArgumentsContext {
		let localctx: ArgumentsContext = new ArgumentsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, TorchParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 101;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 12582928) !== 0)) {
				{
				this.state = 93;
				this.expr(0);
				this.state = 98;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===8) {
					{
					{
					this.state = 94;
					this.match(TorchParser.T__7);
					this.state = 95;
					this.expr(0);
					}
					}
					this.state = 100;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let localctx: BlockContext = new BlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, TorchParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 103;
			this.match(TorchParser.T__8);
			this.state = 105;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 104;
				this.statements();
				}
				}
				this.state = 107;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 12714202) !== 0));
			this.state = 109;
			this.match(TorchParser.T__9);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public comparisionOperator(): ComparisionOperatorContext {
		let localctx: ComparisionOperatorContext = new ComparisionOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, TorchParser.RULE_comparisionOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 111;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 129024) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public returnStatement(): ReturnStatementContext {
		let localctx: ReturnStatementContext = new ReturnStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, TorchParser.RULE_returnStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 113;
			this.match(TorchParser.T__16);
			this.state = 115;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 114;
				this.expr(0);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExprContext = new ExprContext(this, this._ctx, _parentState);
		let _prevctx: ExprContext = localctx;
		let _startState: number = 26;
		this.enterRecursionRule(localctx, 26, TorchParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 125;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				this.state = 118;
				this.functionCall();
				}
				break;
			case 2:
				{
				this.state = 119;
				this.match(TorchParser.T__3);
				this.state = 120;
				this.expr(0);
				this.state = 121;
				this.match(TorchParser.T__4);
				}
				break;
			case 3:
				{
				this.state = 123;
				this.match(TorchParser.INT);
				}
				break;
			case 4:
				{
				this.state = 124;
				this.match(TorchParser.ID);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 139;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 137;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 12, this._ctx) ) {
					case 1:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, TorchParser.RULE_expr);
						this.state = 127;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 128;
						_la = this._input.LA(1);
						if(!(_la===18 || _la===19)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 129;
						this.expr(7);
						}
						break;
					case 2:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, TorchParser.RULE_expr);
						this.state = 130;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 131;
						_la = this._input.LA(1);
						if(!(_la===20 || _la===21)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 132;
						this.expr(6);
						}
						break;
					case 3:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, TorchParser.RULE_expr);
						this.state = 133;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 134;
						this.comparisionOperator();
						this.state = 135;
						this.expr(5);
						}
						break;
					}
					}
				}
				this.state = 141;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 13:
			return this.expr_sempred(localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 6);
		case 1:
			return this.precpred(this._ctx, 5);
		case 2:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,25,143,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,1,0,4,0,30,8,0,11,0,12,0,31,1,0,1,
	0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,44,8,1,1,2,1,2,1,2,1,2,3,2,50,8,2,
	1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,
	1,6,1,6,3,6,72,8,6,1,6,1,6,1,6,1,7,1,7,1,7,5,7,80,8,7,10,7,12,7,83,9,7,
	3,7,85,8,7,1,8,1,8,1,8,3,8,90,8,8,1,8,1,8,1,9,1,9,1,9,5,9,97,8,9,10,9,12,
	9,100,9,9,3,9,102,8,9,1,10,1,10,4,10,106,8,10,11,10,12,10,107,1,10,1,10,
	1,11,1,11,1,12,1,12,3,12,116,8,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,
	13,3,13,126,8,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,5,13,
	138,8,13,10,13,12,13,141,9,13,1,13,0,1,26,14,0,2,4,6,8,10,12,14,16,18,20,
	22,24,26,0,3,1,0,11,16,1,0,18,19,1,0,20,21,151,0,29,1,0,0,0,2,43,1,0,0,
	0,4,45,1,0,0,0,6,51,1,0,0,0,8,55,1,0,0,0,10,61,1,0,0,0,12,67,1,0,0,0,14,
	84,1,0,0,0,16,86,1,0,0,0,18,101,1,0,0,0,20,103,1,0,0,0,22,111,1,0,0,0,24,
	113,1,0,0,0,26,125,1,0,0,0,28,30,3,2,1,0,29,28,1,0,0,0,30,31,1,0,0,0,31,
	29,1,0,0,0,31,32,1,0,0,0,32,33,1,0,0,0,33,34,5,0,0,1,34,1,1,0,0,0,35,44,
	3,4,2,0,36,44,3,6,3,0,37,44,3,12,6,0,38,44,3,8,4,0,39,44,3,10,5,0,40,44,
	3,24,12,0,41,44,3,16,8,0,42,44,3,26,13,0,43,35,1,0,0,0,43,36,1,0,0,0,43,
	37,1,0,0,0,43,38,1,0,0,0,43,39,1,0,0,0,43,40,1,0,0,0,43,41,1,0,0,0,43,42,
	1,0,0,0,44,3,1,0,0,0,45,46,5,1,0,0,46,49,5,22,0,0,47,48,5,2,0,0,48,50,3,
	26,13,0,49,47,1,0,0,0,49,50,1,0,0,0,50,5,1,0,0,0,51,52,5,22,0,0,52,53,5,
	2,0,0,53,54,3,26,13,0,54,7,1,0,0,0,55,56,5,3,0,0,56,57,5,4,0,0,57,58,3,
	26,13,0,58,59,5,5,0,0,59,60,3,20,10,0,60,9,1,0,0,0,61,62,5,6,0,0,62,63,
	5,4,0,0,63,64,3,26,13,0,64,65,5,5,0,0,65,66,3,20,10,0,66,11,1,0,0,0,67,
	68,5,7,0,0,68,69,5,22,0,0,69,71,5,4,0,0,70,72,3,14,7,0,71,70,1,0,0,0,71,
	72,1,0,0,0,72,73,1,0,0,0,73,74,5,5,0,0,74,75,3,20,10,0,75,13,1,0,0,0,76,
	81,5,22,0,0,77,78,5,8,0,0,78,80,5,22,0,0,79,77,1,0,0,0,80,83,1,0,0,0,81,
	79,1,0,0,0,81,82,1,0,0,0,82,85,1,0,0,0,83,81,1,0,0,0,84,76,1,0,0,0,84,85,
	1,0,0,0,85,15,1,0,0,0,86,87,5,22,0,0,87,89,5,4,0,0,88,90,3,18,9,0,89,88,
	1,0,0,0,89,90,1,0,0,0,90,91,1,0,0,0,91,92,5,5,0,0,92,17,1,0,0,0,93,98,3,
	26,13,0,94,95,5,8,0,0,95,97,3,26,13,0,96,94,1,0,0,0,97,100,1,0,0,0,98,96,
	1,0,0,0,98,99,1,0,0,0,99,102,1,0,0,0,100,98,1,0,0,0,101,93,1,0,0,0,101,
	102,1,0,0,0,102,19,1,0,0,0,103,105,5,9,0,0,104,106,3,2,1,0,105,104,1,0,
	0,0,106,107,1,0,0,0,107,105,1,0,0,0,107,108,1,0,0,0,108,109,1,0,0,0,109,
	110,5,10,0,0,110,21,1,0,0,0,111,112,7,0,0,0,112,23,1,0,0,0,113,115,5,17,
	0,0,114,116,3,26,13,0,115,114,1,0,0,0,115,116,1,0,0,0,116,25,1,0,0,0,117,
	118,6,13,-1,0,118,126,3,16,8,0,119,120,5,4,0,0,120,121,3,26,13,0,121,122,
	5,5,0,0,122,126,1,0,0,0,123,126,5,23,0,0,124,126,5,22,0,0,125,117,1,0,0,
	0,125,119,1,0,0,0,125,123,1,0,0,0,125,124,1,0,0,0,126,139,1,0,0,0,127,128,
	10,6,0,0,128,129,7,1,0,0,129,138,3,26,13,7,130,131,10,5,0,0,131,132,7,2,
	0,0,132,138,3,26,13,6,133,134,10,4,0,0,134,135,3,22,11,0,135,136,3,26,13,
	5,136,138,1,0,0,0,137,127,1,0,0,0,137,130,1,0,0,0,137,133,1,0,0,0,138,141,
	1,0,0,0,139,137,1,0,0,0,139,140,1,0,0,0,140,27,1,0,0,0,141,139,1,0,0,0,
	14,31,43,49,71,81,84,89,98,101,107,115,125,137,139];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!TorchParser.__ATN) {
			TorchParser.__ATN = new ATNDeserializer().deserialize(TorchParser._serializedATN);
		}

		return TorchParser.__ATN;
	}


	static DecisionsToDFA = TorchParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ProgContext extends ParserRuleContext {
	constructor(parser?: TorchParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(TorchParser.EOF, 0);
	}
	public statements_list(): StatementsContext[] {
		return this.getTypedRuleContexts(StatementsContext) as StatementsContext[];
	}
	public statements(i: number): StatementsContext {
		return this.getTypedRuleContext(StatementsContext, i) as StatementsContext;
	}
    public get ruleIndex(): number {
    	return TorchParser.RULE_prog;
	}
	public enterRule(listener: TorchListener): void {
	    if(listener.enterProg) {
	 		listener.enterProg(this);
		}
	}
	public exitRule(listener: TorchListener): void {
	    if(listener.exitProg) {
	 		listener.exitProg(this);
		}
	}
}


export class StatementsContext extends ParserRuleContext {
	constructor(parser?: TorchParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public letDeclaration(): LetDeclarationContext {
		return this.getTypedRuleContext(LetDeclarationContext, 0) as LetDeclarationContext;
	}
	public letAssignment(): LetAssignmentContext {
		return this.getTypedRuleContext(LetAssignmentContext, 0) as LetAssignmentContext;
	}
	public functionDeclaration(): FunctionDeclarationContext {
		return this.getTypedRuleContext(FunctionDeclarationContext, 0) as FunctionDeclarationContext;
	}
	public ifStatement(): IfStatementContext {
		return this.getTypedRuleContext(IfStatementContext, 0) as IfStatementContext;
	}
	public whileStatement(): WhileStatementContext {
		return this.getTypedRuleContext(WhileStatementContext, 0) as WhileStatementContext;
	}
	public returnStatement(): ReturnStatementContext {
		return this.getTypedRuleContext(ReturnStatementContext, 0) as ReturnStatementContext;
	}
	public functionCall(): FunctionCallContext {
		return this.getTypedRuleContext(FunctionCallContext, 0) as FunctionCallContext;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return TorchParser.RULE_statements;
	}
	public enterRule(listener: TorchListener): void {
	    if(listener.enterStatements) {
	 		listener.enterStatements(this);
		}
	}
	public exitRule(listener: TorchListener): void {
	    if(listener.exitStatements) {
	 		listener.exitStatements(this);
		}
	}
}


export class LetDeclarationContext extends ParserRuleContext {
	constructor(parser?: TorchParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(TorchParser.ID, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return TorchParser.RULE_letDeclaration;
	}
	public enterRule(listener: TorchListener): void {
	    if(listener.enterLetDeclaration) {
	 		listener.enterLetDeclaration(this);
		}
	}
	public exitRule(listener: TorchListener): void {
	    if(listener.exitLetDeclaration) {
	 		listener.exitLetDeclaration(this);
		}
	}
}


export class LetAssignmentContext extends ParserRuleContext {
	constructor(parser?: TorchParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(TorchParser.ID, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return TorchParser.RULE_letAssignment;
	}
	public enterRule(listener: TorchListener): void {
	    if(listener.enterLetAssignment) {
	 		listener.enterLetAssignment(this);
		}
	}
	public exitRule(listener: TorchListener): void {
	    if(listener.exitLetAssignment) {
	 		listener.exitLetAssignment(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	constructor(parser?: TorchParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return TorchParser.RULE_ifStatement;
	}
	public enterRule(listener: TorchListener): void {
	    if(listener.enterIfStatement) {
	 		listener.enterIfStatement(this);
		}
	}
	public exitRule(listener: TorchListener): void {
	    if(listener.exitIfStatement) {
	 		listener.exitIfStatement(this);
		}
	}
}


export class WhileStatementContext extends ParserRuleContext {
	constructor(parser?: TorchParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return TorchParser.RULE_whileStatement;
	}
	public enterRule(listener: TorchListener): void {
	    if(listener.enterWhileStatement) {
	 		listener.enterWhileStatement(this);
		}
	}
	public exitRule(listener: TorchListener): void {
	    if(listener.exitWhileStatement) {
	 		listener.exitWhileStatement(this);
		}
	}
}


export class FunctionDeclarationContext extends ParserRuleContext {
	constructor(parser?: TorchParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(TorchParser.ID, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public parameters(): ParametersContext {
		return this.getTypedRuleContext(ParametersContext, 0) as ParametersContext;
	}
    public get ruleIndex(): number {
    	return TorchParser.RULE_functionDeclaration;
	}
	public enterRule(listener: TorchListener): void {
	    if(listener.enterFunctionDeclaration) {
	 		listener.enterFunctionDeclaration(this);
		}
	}
	public exitRule(listener: TorchListener): void {
	    if(listener.exitFunctionDeclaration) {
	 		listener.exitFunctionDeclaration(this);
		}
	}
}


export class ParametersContext extends ParserRuleContext {
	constructor(parser?: TorchParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID_list(): TerminalNode[] {
	    	return this.getTokens(TorchParser.ID);
	}
	public ID(i: number): TerminalNode {
		return this.getToken(TorchParser.ID, i);
	}
    public get ruleIndex(): number {
    	return TorchParser.RULE_parameters;
	}
	public enterRule(listener: TorchListener): void {
	    if(listener.enterParameters) {
	 		listener.enterParameters(this);
		}
	}
	public exitRule(listener: TorchListener): void {
	    if(listener.exitParameters) {
	 		listener.exitParameters(this);
		}
	}
}


export class FunctionCallContext extends ParserRuleContext {
	constructor(parser?: TorchParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(TorchParser.ID, 0);
	}
	public arguments(): ArgumentsContext {
		return this.getTypedRuleContext(ArgumentsContext, 0) as ArgumentsContext;
	}
    public get ruleIndex(): number {
    	return TorchParser.RULE_functionCall;
	}
	public enterRule(listener: TorchListener): void {
	    if(listener.enterFunctionCall) {
	 		listener.enterFunctionCall(this);
		}
	}
	public exitRule(listener: TorchListener): void {
	    if(listener.exitFunctionCall) {
	 		listener.exitFunctionCall(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	constructor(parser?: TorchParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
    public get ruleIndex(): number {
    	return TorchParser.RULE_arguments;
	}
	public enterRule(listener: TorchListener): void {
	    if(listener.enterArguments) {
	 		listener.enterArguments(this);
		}
	}
	public exitRule(listener: TorchListener): void {
	    if(listener.exitArguments) {
	 		listener.exitArguments(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	constructor(parser?: TorchParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statements_list(): StatementsContext[] {
		return this.getTypedRuleContexts(StatementsContext) as StatementsContext[];
	}
	public statements(i: number): StatementsContext {
		return this.getTypedRuleContext(StatementsContext, i) as StatementsContext;
	}
    public get ruleIndex(): number {
    	return TorchParser.RULE_block;
	}
	public enterRule(listener: TorchListener): void {
	    if(listener.enterBlock) {
	 		listener.enterBlock(this);
		}
	}
	public exitRule(listener: TorchListener): void {
	    if(listener.exitBlock) {
	 		listener.exitBlock(this);
		}
	}
}


export class ComparisionOperatorContext extends ParserRuleContext {
	constructor(parser?: TorchParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return TorchParser.RULE_comparisionOperator;
	}
	public enterRule(listener: TorchListener): void {
	    if(listener.enterComparisionOperator) {
	 		listener.enterComparisionOperator(this);
		}
	}
	public exitRule(listener: TorchListener): void {
	    if(listener.exitComparisionOperator) {
	 		listener.exitComparisionOperator(this);
		}
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	constructor(parser?: TorchParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return TorchParser.RULE_returnStatement;
	}
	public enterRule(listener: TorchListener): void {
	    if(listener.enterReturnStatement) {
	 		listener.enterReturnStatement(this);
		}
	}
	public exitRule(listener: TorchListener): void {
	    if(listener.exitReturnStatement) {
	 		listener.exitReturnStatement(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parser?: TorchParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public functionCall(): FunctionCallContext {
		return this.getTypedRuleContext(FunctionCallContext, 0) as FunctionCallContext;
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public INT(): TerminalNode {
		return this.getToken(TorchParser.INT, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(TorchParser.ID, 0);
	}
	public comparisionOperator(): ComparisionOperatorContext {
		return this.getTypedRuleContext(ComparisionOperatorContext, 0) as ComparisionOperatorContext;
	}
    public get ruleIndex(): number {
    	return TorchParser.RULE_expr;
	}
	public enterRule(listener: TorchListener): void {
	    if(listener.enterExpr) {
	 		listener.enterExpr(this);
		}
	}
	public exitRule(listener: TorchListener): void {
	    if(listener.exitExpr) {
	 		listener.exitExpr(this);
		}
	}
}
