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
	public static readonly RULE_functionsDeclarations = 6;
	public static readonly RULE_functionCall = 7;
	public static readonly RULE_block = 8;
	public static readonly RULE_comparisionOperator = 9;
	public static readonly RULE_returnStatement = 10;
	public static readonly RULE_expr = 11;
	public static readonly RULE_arg = 12;
	public static readonly literalNames: (string | null)[] = [ null, "'let'", 
                                                            "'='", "'if'", 
                                                            "'('", "')'", 
                                                            "'{'", "'}'", 
                                                            "'while'", "'func'", 
                                                            "','", "'=='", 
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
		"whileStatement", "functionsDeclarations", "functionCall", "block", "comparisionOperator", 
		"returnStatement", "expr", "arg",
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
			this.state = 27;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 26;
				this.statements();
				}
				}
				this.state = 29;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 12714778) !== 0));
			this.state = 31;
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
			this.state = 40;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 33;
				this.letDeclaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 34;
				this.letAssignment();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 35;
				this.ifStatement();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 36;
				this.whileStatement();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 37;
				this.functionsDeclarations();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 38;
				this.returnStatement();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 39;
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
			this.state = 42;
			this.match(TorchParser.T__0);
			this.state = 43;
			this.match(TorchParser.ID);
			this.state = 46;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===2) {
				{
				this.state = 44;
				this.match(TorchParser.T__1);
				this.state = 45;
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
			this.state = 48;
			this.match(TorchParser.ID);
			this.state = 49;
			this.match(TorchParser.T__1);
			this.state = 50;
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
			this.state = 52;
			this.match(TorchParser.T__2);
			this.state = 53;
			this.match(TorchParser.T__3);
			this.state = 54;
			this.expr(0);
			this.state = 55;
			this.match(TorchParser.T__4);
			this.state = 56;
			this.match(TorchParser.T__5);
			this.state = 58;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 57;
				this.statements();
				}
				}
				this.state = 60;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 12714778) !== 0));
			this.state = 62;
			this.match(TorchParser.T__6);
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
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 64;
			this.match(TorchParser.T__7);
			this.state = 65;
			this.match(TorchParser.T__3);
			this.state = 66;
			this.expr(0);
			this.state = 67;
			this.match(TorchParser.T__4);
			this.state = 68;
			this.match(TorchParser.T__5);
			this.state = 70;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 69;
				this.statements();
				}
				}
				this.state = 72;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 12714778) !== 0));
			this.state = 74;
			this.match(TorchParser.T__6);
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
	public functionsDeclarations(): FunctionsDeclarationsContext {
		let localctx: FunctionsDeclarationsContext = new FunctionsDeclarationsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, TorchParser.RULE_functionsDeclarations);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 76;
			this.match(TorchParser.T__8);
			this.state = 77;
			this.match(TorchParser.ID);
			this.state = 78;
			this.match(TorchParser.T__3);
			this.state = 87;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===22) {
				{
				this.state = 79;
				this.match(TorchParser.ID);
				this.state = 84;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===10) {
					{
					{
					this.state = 80;
					this.match(TorchParser.T__9);
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

			this.state = 89;
			this.match(TorchParser.T__4);
			this.state = 90;
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
	public functionCall(): FunctionCallContext {
		let localctx: FunctionCallContext = new FunctionCallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, TorchParser.RULE_functionCall);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 92;
			this.match(TorchParser.ID);
			this.state = 93;
			this.match(TorchParser.T__3);
			this.state = 102;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 12582928) !== 0)) {
				{
				this.state = 94;
				this.expr(0);
				this.state = 99;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===10) {
					{
					{
					this.state = 95;
					this.match(TorchParser.T__9);
					this.state = 96;
					this.expr(0);
					}
					}
					this.state = 101;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 104;
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
	public block(): BlockContext {
		let localctx: BlockContext = new BlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, TorchParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 106;
			this.match(TorchParser.T__5);
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
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 12714778) !== 0));
			this.state = 112;
			this.match(TorchParser.T__6);
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
		this.enterRule(localctx, 18, TorchParser.RULE_comparisionOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 114;
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
		this.enterRule(localctx, 20, TorchParser.RULE_returnStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 116;
			this.match(TorchParser.T__16);
			this.state = 118;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
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
		let _startState: number = 22;
		this.enterRecursionRule(localctx, 22, TorchParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 128;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				this.state = 121;
				this.match(TorchParser.T__3);
				this.state = 122;
				this.expr(0);
				this.state = 123;
				this.match(TorchParser.T__4);
				}
				break;
			case 2:
				{
				this.state = 125;
				this.functionCall();
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
			_alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 140;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 12, this._ctx) ) {
					case 1:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, TorchParser.RULE_expr);
						this.state = 130;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 131;
						_la = this._input.LA(1);
						if(!(_la===18 || _la===19)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 132;
						this.expr(8);
						}
						break;
					case 2:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, TorchParser.RULE_expr);
						this.state = 133;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 134;
						_la = this._input.LA(1);
						if(!(_la===20 || _la===21)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 135;
						this.expr(7);
						}
						break;
					case 3:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, TorchParser.RULE_expr);
						this.state = 136;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 137;
						this.comparisionOperator();
						this.state = 138;
						this.expr(6);
						}
						break;
					}
					}
				}
				this.state = 144;
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
	// @RuleVersion(0)
	public arg(): ArgContext {
		let localctx: ArgContext = new ArgContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, TorchParser.RULE_arg);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 145;
			_la = this._input.LA(1);
			if(!(_la===22 || _la===23)) {
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

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 11:
			return this.expr_sempred(localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 7);
		case 1:
			return this.precpred(this._ctx, 6);
		case 2:
			return this.precpred(this._ctx, 5);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,25,148,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,1,0,4,0,28,8,0,11,0,12,0,29,1,0,1,0,1,1,1,1,
	1,1,1,1,1,1,1,1,1,1,3,1,41,8,1,1,2,1,2,1,2,1,2,3,2,47,8,2,1,3,1,3,1,3,1,
	3,1,4,1,4,1,4,1,4,1,4,1,4,4,4,59,8,4,11,4,12,4,60,1,4,1,4,1,5,1,5,1,5,1,
	5,1,5,1,5,4,5,71,8,5,11,5,12,5,72,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,5,6,83,
	8,6,10,6,12,6,86,9,6,3,6,88,8,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,5,7,98,
	8,7,10,7,12,7,101,9,7,3,7,103,8,7,1,7,1,7,1,8,1,8,4,8,109,8,8,11,8,12,8,
	110,1,8,1,8,1,9,1,9,1,10,1,10,3,10,119,8,10,1,11,1,11,1,11,1,11,1,11,1,
	11,1,11,1,11,3,11,129,8,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,
	1,11,5,11,141,8,11,10,11,12,11,144,9,11,1,12,1,12,1,12,0,1,22,13,0,2,4,
	6,8,10,12,14,16,18,20,22,24,0,4,1,0,11,16,1,0,18,19,1,0,20,21,1,0,22,23,
	156,0,27,1,0,0,0,2,40,1,0,0,0,4,42,1,0,0,0,6,48,1,0,0,0,8,52,1,0,0,0,10,
	64,1,0,0,0,12,76,1,0,0,0,14,92,1,0,0,0,16,106,1,0,0,0,18,114,1,0,0,0,20,
	116,1,0,0,0,22,128,1,0,0,0,24,145,1,0,0,0,26,28,3,2,1,0,27,26,1,0,0,0,28,
	29,1,0,0,0,29,27,1,0,0,0,29,30,1,0,0,0,30,31,1,0,0,0,31,32,5,0,0,1,32,1,
	1,0,0,0,33,41,3,4,2,0,34,41,3,6,3,0,35,41,3,8,4,0,36,41,3,10,5,0,37,41,
	3,12,6,0,38,41,3,20,10,0,39,41,3,22,11,0,40,33,1,0,0,0,40,34,1,0,0,0,40,
	35,1,0,0,0,40,36,1,0,0,0,40,37,1,0,0,0,40,38,1,0,0,0,40,39,1,0,0,0,41,3,
	1,0,0,0,42,43,5,1,0,0,43,46,5,22,0,0,44,45,5,2,0,0,45,47,3,22,11,0,46,44,
	1,0,0,0,46,47,1,0,0,0,47,5,1,0,0,0,48,49,5,22,0,0,49,50,5,2,0,0,50,51,3,
	22,11,0,51,7,1,0,0,0,52,53,5,3,0,0,53,54,5,4,0,0,54,55,3,22,11,0,55,56,
	5,5,0,0,56,58,5,6,0,0,57,59,3,2,1,0,58,57,1,0,0,0,59,60,1,0,0,0,60,58,1,
	0,0,0,60,61,1,0,0,0,61,62,1,0,0,0,62,63,5,7,0,0,63,9,1,0,0,0,64,65,5,8,
	0,0,65,66,5,4,0,0,66,67,3,22,11,0,67,68,5,5,0,0,68,70,5,6,0,0,69,71,3,2,
	1,0,70,69,1,0,0,0,71,72,1,0,0,0,72,70,1,0,0,0,72,73,1,0,0,0,73,74,1,0,0,
	0,74,75,5,7,0,0,75,11,1,0,0,0,76,77,5,9,0,0,77,78,5,22,0,0,78,87,5,4,0,
	0,79,84,5,22,0,0,80,81,5,10,0,0,81,83,5,22,0,0,82,80,1,0,0,0,83,86,1,0,
	0,0,84,82,1,0,0,0,84,85,1,0,0,0,85,88,1,0,0,0,86,84,1,0,0,0,87,79,1,0,0,
	0,87,88,1,0,0,0,88,89,1,0,0,0,89,90,5,5,0,0,90,91,3,16,8,0,91,13,1,0,0,
	0,92,93,5,22,0,0,93,102,5,4,0,0,94,99,3,22,11,0,95,96,5,10,0,0,96,98,3,
	22,11,0,97,95,1,0,0,0,98,101,1,0,0,0,99,97,1,0,0,0,99,100,1,0,0,0,100,103,
	1,0,0,0,101,99,1,0,0,0,102,94,1,0,0,0,102,103,1,0,0,0,103,104,1,0,0,0,104,
	105,5,5,0,0,105,15,1,0,0,0,106,108,5,6,0,0,107,109,3,2,1,0,108,107,1,0,
	0,0,109,110,1,0,0,0,110,108,1,0,0,0,110,111,1,0,0,0,111,112,1,0,0,0,112,
	113,5,7,0,0,113,17,1,0,0,0,114,115,7,0,0,0,115,19,1,0,0,0,116,118,5,17,
	0,0,117,119,3,22,11,0,118,117,1,0,0,0,118,119,1,0,0,0,119,21,1,0,0,0,120,
	121,6,11,-1,0,121,122,5,4,0,0,122,123,3,22,11,0,123,124,5,5,0,0,124,129,
	1,0,0,0,125,129,3,14,7,0,126,129,5,23,0,0,127,129,5,22,0,0,128,120,1,0,
	0,0,128,125,1,0,0,0,128,126,1,0,0,0,128,127,1,0,0,0,129,142,1,0,0,0,130,
	131,10,7,0,0,131,132,7,1,0,0,132,141,3,22,11,8,133,134,10,6,0,0,134,135,
	7,2,0,0,135,141,3,22,11,7,136,137,10,5,0,0,137,138,3,18,9,0,138,139,3,22,
	11,6,139,141,1,0,0,0,140,130,1,0,0,0,140,133,1,0,0,0,140,136,1,0,0,0,141,
	144,1,0,0,0,142,140,1,0,0,0,142,143,1,0,0,0,143,23,1,0,0,0,144,142,1,0,
	0,0,145,146,7,3,0,0,146,25,1,0,0,0,14,29,40,46,60,72,84,87,99,102,110,118,
	128,140,142];

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
	public ifStatement(): IfStatementContext {
		return this.getTypedRuleContext(IfStatementContext, 0) as IfStatementContext;
	}
	public whileStatement(): WhileStatementContext {
		return this.getTypedRuleContext(WhileStatementContext, 0) as WhileStatementContext;
	}
	public functionsDeclarations(): FunctionsDeclarationsContext {
		return this.getTypedRuleContext(FunctionsDeclarationsContext, 0) as FunctionsDeclarationsContext;
	}
	public returnStatement(): ReturnStatementContext {
		return this.getTypedRuleContext(ReturnStatementContext, 0) as ReturnStatementContext;
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
	public statements_list(): StatementsContext[] {
		return this.getTypedRuleContexts(StatementsContext) as StatementsContext[];
	}
	public statements(i: number): StatementsContext {
		return this.getTypedRuleContext(StatementsContext, i) as StatementsContext;
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
	public statements_list(): StatementsContext[] {
		return this.getTypedRuleContexts(StatementsContext) as StatementsContext[];
	}
	public statements(i: number): StatementsContext {
		return this.getTypedRuleContext(StatementsContext, i) as StatementsContext;
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


export class FunctionsDeclarationsContext extends ParserRuleContext {
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
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return TorchParser.RULE_functionsDeclarations;
	}
	public enterRule(listener: TorchListener): void {
	    if(listener.enterFunctionsDeclarations) {
	 		listener.enterFunctionsDeclarations(this);
		}
	}
	public exitRule(listener: TorchListener): void {
	    if(listener.exitFunctionsDeclarations) {
	 		listener.exitFunctionsDeclarations(this);
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
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
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
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public functionCall(): FunctionCallContext {
		return this.getTypedRuleContext(FunctionCallContext, 0) as FunctionCallContext;
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


export class ArgContext extends ParserRuleContext {
	constructor(parser?: TorchParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(TorchParser.ID, 0);
	}
	public INT(): TerminalNode {
		return this.getToken(TorchParser.INT, 0);
	}
    public get ruleIndex(): number {
    	return TorchParser.RULE_arg;
	}
	public enterRule(listener: TorchListener): void {
	    if(listener.enterArg) {
	 		listener.enterArg(this);
		}
	}
	public exitRule(listener: TorchListener): void {
	    if(listener.exitArg) {
	 		listener.exitArg(this);
		}
	}
}
