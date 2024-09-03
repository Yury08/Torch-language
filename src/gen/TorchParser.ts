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
	public static readonly T__21 = 22;
	public static readonly ID = 23;
	public static readonly INT = 24;
	public static readonly WS = 25;
	public static readonly COMMENT = 26;
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
                                                            "'else'", "'while'", 
                                                            "'func'", "','", 
                                                            "'{'", "'}'", 
                                                            "'=='", "'!='", 
                                                            "'<'", "'>'", 
                                                            "'<='", "'>='", 
                                                            "'return'", 
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
                                                             null, "ID", 
                                                             "INT", "WS", 
                                                             "COMMENT" ];
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
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 25428378) !== 0));
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
		let _la: number;
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
			this.state = 62;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===6) {
				{
				this.state = 60;
				this.match(TorchParser.T__5);
				this.state = 61;
				this.block();
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
	public whileStatement(): WhileStatementContext {
		let localctx: WhileStatementContext = new WhileStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, TorchParser.RULE_whileStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 64;
			this.match(TorchParser.T__6);
			this.state = 65;
			this.match(TorchParser.T__3);
			this.state = 66;
			this.expr(0);
			this.state = 67;
			this.match(TorchParser.T__4);
			this.state = 68;
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
			this.state = 70;
			this.match(TorchParser.T__7);
			this.state = 71;
			this.match(TorchParser.ID);
			this.state = 72;
			this.match(TorchParser.T__3);
			this.state = 74;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				{
				this.state = 73;
				this.parameters();
				}
				break;
			}
			this.state = 76;
			this.match(TorchParser.T__4);
			this.state = 77;
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
			this.state = 87;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===23) {
				{
				this.state = 79;
				this.match(TorchParser.ID);
				this.state = 84;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===9) {
					{
					{
					this.state = 80;
					this.match(TorchParser.T__8);
					this.state = 81;
					this.match(TorchParser.ID);
					}
					}
					this.state = 86;
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
			this.state = 89;
			this.match(TorchParser.ID);
			this.state = 90;
			this.match(TorchParser.T__3);
			this.state = 92;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				{
				this.state = 91;
				this.arguments();
				}
				break;
			}
			this.state = 94;
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
			this.state = 104;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 25165840) !== 0)) {
				{
				this.state = 96;
				this.expr(0);
				this.state = 101;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===9) {
					{
					{
					this.state = 97;
					this.match(TorchParser.T__8);
					this.state = 98;
					this.expr(0);
					}
					}
					this.state = 103;
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
			this.state = 106;
			this.match(TorchParser.T__9);
			this.state = 108;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 107;
				this.statements();
				}
				}
				this.state = 110;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 25428378) !== 0));
			this.state = 112;
			this.match(TorchParser.T__10);
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
			this.state = 114;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 258048) !== 0))) {
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
			this.state = 116;
			this.match(TorchParser.T__17);
			this.state = 118;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				this.state = 117;
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
			this.state = 128;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				this.state = 121;
				this.functionCall();
				}
				break;
			case 2:
				{
				this.state = 122;
				this.match(TorchParser.T__3);
				this.state = 123;
				this.expr(0);
				this.state = 124;
				this.match(TorchParser.T__4);
				}
				break;
			case 3:
				{
				this.state = 126;
				this.match(TorchParser.INT);
				}
				break;
			case 4:
				{
				this.state = 127;
				this.match(TorchParser.ID);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 142;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 14, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 140;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
					case 1:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, TorchParser.RULE_expr);
						this.state = 130;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 131;
						_la = this._input.LA(1);
						if(!(_la===19 || _la===20)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 132;
						this.expr(7);
						}
						break;
					case 2:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, TorchParser.RULE_expr);
						this.state = 133;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 134;
						_la = this._input.LA(1);
						if(!(_la===21 || _la===22)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 135;
						this.expr(6);
						}
						break;
					case 3:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, TorchParser.RULE_expr);
						this.state = 136;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 137;
						this.comparisionOperator();
						this.state = 138;
						this.expr(5);
						}
						break;
					}
					}
				}
				this.state = 144;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 14, this._ctx);
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

	public static readonly _serializedATN: number[] = [4,1,26,146,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,1,0,4,0,30,8,0,11,0,12,0,31,1,0,1,
	0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,44,8,1,1,2,1,2,1,2,1,2,3,2,50,8,2,
	1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,63,8,4,1,5,1,5,1,5,1,5,
	1,5,1,5,1,6,1,6,1,6,1,6,3,6,75,8,6,1,6,1,6,1,6,1,7,1,7,1,7,5,7,83,8,7,10,
	7,12,7,86,9,7,3,7,88,8,7,1,8,1,8,1,8,3,8,93,8,8,1,8,1,8,1,9,1,9,1,9,5,9,
	100,8,9,10,9,12,9,103,9,9,3,9,105,8,9,1,10,1,10,4,10,109,8,10,11,10,12,
	10,110,1,10,1,10,1,11,1,11,1,12,1,12,3,12,119,8,12,1,13,1,13,1,13,1,13,
	1,13,1,13,1,13,1,13,3,13,129,8,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,
	13,1,13,1,13,5,13,141,8,13,10,13,12,13,144,9,13,1,13,0,1,26,14,0,2,4,6,
	8,10,12,14,16,18,20,22,24,26,0,3,1,0,12,17,1,0,19,20,1,0,21,22,155,0,29,
	1,0,0,0,2,43,1,0,0,0,4,45,1,0,0,0,6,51,1,0,0,0,8,55,1,0,0,0,10,64,1,0,0,
	0,12,70,1,0,0,0,14,87,1,0,0,0,16,89,1,0,0,0,18,104,1,0,0,0,20,106,1,0,0,
	0,22,114,1,0,0,0,24,116,1,0,0,0,26,128,1,0,0,0,28,30,3,2,1,0,29,28,1,0,
	0,0,30,31,1,0,0,0,31,29,1,0,0,0,31,32,1,0,0,0,32,33,1,0,0,0,33,34,5,0,0,
	1,34,1,1,0,0,0,35,44,3,4,2,0,36,44,3,6,3,0,37,44,3,12,6,0,38,44,3,8,4,0,
	39,44,3,10,5,0,40,44,3,24,12,0,41,44,3,16,8,0,42,44,3,26,13,0,43,35,1,0,
	0,0,43,36,1,0,0,0,43,37,1,0,0,0,43,38,1,0,0,0,43,39,1,0,0,0,43,40,1,0,0,
	0,43,41,1,0,0,0,43,42,1,0,0,0,44,3,1,0,0,0,45,46,5,1,0,0,46,49,5,23,0,0,
	47,48,5,2,0,0,48,50,3,26,13,0,49,47,1,0,0,0,49,50,1,0,0,0,50,5,1,0,0,0,
	51,52,5,23,0,0,52,53,5,2,0,0,53,54,3,26,13,0,54,7,1,0,0,0,55,56,5,3,0,0,
	56,57,5,4,0,0,57,58,3,26,13,0,58,59,5,5,0,0,59,62,3,20,10,0,60,61,5,6,0,
	0,61,63,3,20,10,0,62,60,1,0,0,0,62,63,1,0,0,0,63,9,1,0,0,0,64,65,5,7,0,
	0,65,66,5,4,0,0,66,67,3,26,13,0,67,68,5,5,0,0,68,69,3,20,10,0,69,11,1,0,
	0,0,70,71,5,8,0,0,71,72,5,23,0,0,72,74,5,4,0,0,73,75,3,14,7,0,74,73,1,0,
	0,0,74,75,1,0,0,0,75,76,1,0,0,0,76,77,5,5,0,0,77,78,3,20,10,0,78,13,1,0,
	0,0,79,84,5,23,0,0,80,81,5,9,0,0,81,83,5,23,0,0,82,80,1,0,0,0,83,86,1,0,
	0,0,84,82,1,0,0,0,84,85,1,0,0,0,85,88,1,0,0,0,86,84,1,0,0,0,87,79,1,0,0,
	0,87,88,1,0,0,0,88,15,1,0,0,0,89,90,5,23,0,0,90,92,5,4,0,0,91,93,3,18,9,
	0,92,91,1,0,0,0,92,93,1,0,0,0,93,94,1,0,0,0,94,95,5,5,0,0,95,17,1,0,0,0,
	96,101,3,26,13,0,97,98,5,9,0,0,98,100,3,26,13,0,99,97,1,0,0,0,100,103,1,
	0,0,0,101,99,1,0,0,0,101,102,1,0,0,0,102,105,1,0,0,0,103,101,1,0,0,0,104,
	96,1,0,0,0,104,105,1,0,0,0,105,19,1,0,0,0,106,108,5,10,0,0,107,109,3,2,
	1,0,108,107,1,0,0,0,109,110,1,0,0,0,110,108,1,0,0,0,110,111,1,0,0,0,111,
	112,1,0,0,0,112,113,5,11,0,0,113,21,1,0,0,0,114,115,7,0,0,0,115,23,1,0,
	0,0,116,118,5,18,0,0,117,119,3,26,13,0,118,117,1,0,0,0,118,119,1,0,0,0,
	119,25,1,0,0,0,120,121,6,13,-1,0,121,129,3,16,8,0,122,123,5,4,0,0,123,124,
	3,26,13,0,124,125,5,5,0,0,125,129,1,0,0,0,126,129,5,24,0,0,127,129,5,23,
	0,0,128,120,1,0,0,0,128,122,1,0,0,0,128,126,1,0,0,0,128,127,1,0,0,0,129,
	142,1,0,0,0,130,131,10,6,0,0,131,132,7,1,0,0,132,141,3,26,13,7,133,134,
	10,5,0,0,134,135,7,2,0,0,135,141,3,26,13,6,136,137,10,4,0,0,137,138,3,22,
	11,0,138,139,3,26,13,5,139,141,1,0,0,0,140,130,1,0,0,0,140,133,1,0,0,0,
	140,136,1,0,0,0,141,144,1,0,0,0,142,140,1,0,0,0,142,143,1,0,0,0,143,27,
	1,0,0,0,144,142,1,0,0,0,15,31,43,49,62,74,84,87,92,101,104,110,118,128,
	140,142];

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
	public block_list(): BlockContext[] {
		return this.getTypedRuleContexts(BlockContext) as BlockContext[];
	}
	public block(i: number): BlockContext {
		return this.getTypedRuleContext(BlockContext, i) as BlockContext;
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
