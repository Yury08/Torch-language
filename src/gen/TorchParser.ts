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
	public static readonly ID = 20;
	public static readonly INT = 21;
	public static readonly WS = 22;
	public static readonly COMMENT = 23;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_prog = 0;
	public static readonly RULE_statements = 1;
	public static readonly RULE_letDeclaration = 2;
	public static readonly RULE_letAssignment = 3;
	public static readonly RULE_ifStatement = 4;
	public static readonly RULE_whileStatement = 5;
	public static readonly RULE_block = 6;
	public static readonly RULE_comparisionOperator = 7;
	public static readonly RULE_returnStatement = 8;
	public static readonly RULE_expr = 9;
	public static readonly literalNames: (string | null)[] = [ null, "'let'", 
                                                            "'='", "'if'", 
                                                            "'('", "')'", 
                                                            "'while'", "'{'", 
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
                                                             "ID", "INT", 
                                                             "WS", "COMMENT" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "statements", "letDeclaration", "letAssignment", "ifStatement", 
		"whileStatement", "block", "comparisionOperator", "returnStatement", "expr",
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
			this.state = 21;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 20;
				this.statements();
				}
				}
				this.state = 23;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3178586) !== 0));
			this.state = 25;
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
			this.state = 33;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 27;
				this.letDeclaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 28;
				this.letAssignment();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 29;
				this.ifStatement();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 30;
				this.whileStatement();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 31;
				this.returnStatement();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 32;
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
			this.state = 35;
			this.match(TorchParser.T__0);
			this.state = 36;
			this.match(TorchParser.ID);
			this.state = 39;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===2) {
				{
				this.state = 37;
				this.match(TorchParser.T__1);
				this.state = 38;
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
			this.state = 41;
			this.match(TorchParser.ID);
			this.state = 42;
			this.match(TorchParser.T__1);
			this.state = 43;
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
			this.state = 45;
			this.match(TorchParser.T__2);
			this.state = 46;
			this.match(TorchParser.T__3);
			this.state = 47;
			this.expr(0);
			this.state = 48;
			this.match(TorchParser.T__4);
			this.state = 49;
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
			this.state = 51;
			this.match(TorchParser.T__5);
			this.state = 52;
			this.match(TorchParser.T__3);
			this.state = 53;
			this.expr(0);
			this.state = 54;
			this.match(TorchParser.T__4);
			this.state = 55;
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
	public block(): BlockContext {
		let localctx: BlockContext = new BlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, TorchParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 57;
			this.match(TorchParser.T__6);
			this.state = 59;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 58;
				this.statements();
				}
				}
				this.state = 61;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3178586) !== 0));
			this.state = 63;
			this.match(TorchParser.T__7);
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
		this.enterRule(localctx, 14, TorchParser.RULE_comparisionOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 65;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 32256) !== 0))) {
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
		this.enterRule(localctx, 16, TorchParser.RULE_returnStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 67;
			this.match(TorchParser.T__14);
			this.state = 69;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				{
				this.state = 68;
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
		let _startState: number = 18;
		this.enterRecursionRule(localctx, 18, TorchParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 78;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 4:
				{
				this.state = 72;
				this.match(TorchParser.T__3);
				this.state = 73;
				this.expr(0);
				this.state = 74;
				this.match(TorchParser.T__4);
				}
				break;
			case 21:
				{
				this.state = 76;
				this.match(TorchParser.INT);
				}
				break;
			case 20:
				{
				this.state = 77;
				this.match(TorchParser.ID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 92;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 90;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 6, this._ctx) ) {
					case 1:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, TorchParser.RULE_expr);
						this.state = 80;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 81;
						_la = this._input.LA(1);
						if(!(_la===16 || _la===17)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 82;
						this.expr(7);
						}
						break;
					case 2:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, TorchParser.RULE_expr);
						this.state = 83;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 84;
						_la = this._input.LA(1);
						if(!(_la===18 || _la===19)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 85;
						this.expr(6);
						}
						break;
					case 3:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, TorchParser.RULE_expr);
						this.state = 86;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 87;
						this.comparisionOperator();
						this.state = 88;
						this.expr(5);
						}
						break;
					}
					}
				}
				this.state = 94;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
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
		case 9:
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

	public static readonly _serializedATN: number[] = [4,1,23,96,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,
	0,4,0,22,8,0,11,0,12,0,23,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,3,1,34,8,1,1,
	2,1,2,1,2,1,2,3,2,40,8,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,
	5,1,5,1,5,1,5,1,5,1,6,1,6,4,6,60,8,6,11,6,12,6,61,1,6,1,6,1,7,1,7,1,8,1,
	8,3,8,70,8,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,79,8,9,1,9,1,9,1,9,1,9,1,9,
	1,9,1,9,1,9,1,9,1,9,5,9,91,8,9,10,9,12,9,94,9,9,1,9,0,1,18,10,0,2,4,6,8,
	10,12,14,16,18,0,3,1,0,9,14,1,0,16,17,1,0,18,19,99,0,21,1,0,0,0,2,33,1,
	0,0,0,4,35,1,0,0,0,6,41,1,0,0,0,8,45,1,0,0,0,10,51,1,0,0,0,12,57,1,0,0,
	0,14,65,1,0,0,0,16,67,1,0,0,0,18,78,1,0,0,0,20,22,3,2,1,0,21,20,1,0,0,0,
	22,23,1,0,0,0,23,21,1,0,0,0,23,24,1,0,0,0,24,25,1,0,0,0,25,26,5,0,0,1,26,
	1,1,0,0,0,27,34,3,4,2,0,28,34,3,6,3,0,29,34,3,8,4,0,30,34,3,10,5,0,31,34,
	3,16,8,0,32,34,3,18,9,0,33,27,1,0,0,0,33,28,1,0,0,0,33,29,1,0,0,0,33,30,
	1,0,0,0,33,31,1,0,0,0,33,32,1,0,0,0,34,3,1,0,0,0,35,36,5,1,0,0,36,39,5,
	20,0,0,37,38,5,2,0,0,38,40,3,18,9,0,39,37,1,0,0,0,39,40,1,0,0,0,40,5,1,
	0,0,0,41,42,5,20,0,0,42,43,5,2,0,0,43,44,3,18,9,0,44,7,1,0,0,0,45,46,5,
	3,0,0,46,47,5,4,0,0,47,48,3,18,9,0,48,49,5,5,0,0,49,50,3,12,6,0,50,9,1,
	0,0,0,51,52,5,6,0,0,52,53,5,4,0,0,53,54,3,18,9,0,54,55,5,5,0,0,55,56,3,
	12,6,0,56,11,1,0,0,0,57,59,5,7,0,0,58,60,3,2,1,0,59,58,1,0,0,0,60,61,1,
	0,0,0,61,59,1,0,0,0,61,62,1,0,0,0,62,63,1,0,0,0,63,64,5,8,0,0,64,13,1,0,
	0,0,65,66,7,0,0,0,66,15,1,0,0,0,67,69,5,15,0,0,68,70,3,18,9,0,69,68,1,0,
	0,0,69,70,1,0,0,0,70,17,1,0,0,0,71,72,6,9,-1,0,72,73,5,4,0,0,73,74,3,18,
	9,0,74,75,5,5,0,0,75,79,1,0,0,0,76,79,5,21,0,0,77,79,5,20,0,0,78,71,1,0,
	0,0,78,76,1,0,0,0,78,77,1,0,0,0,79,92,1,0,0,0,80,81,10,6,0,0,81,82,7,1,
	0,0,82,91,3,18,9,7,83,84,10,5,0,0,84,85,7,2,0,0,85,91,3,18,9,6,86,87,10,
	4,0,0,87,88,3,14,7,0,88,89,3,18,9,5,89,91,1,0,0,0,90,80,1,0,0,0,90,83,1,
	0,0,0,90,86,1,0,0,0,91,94,1,0,0,0,92,90,1,0,0,0,92,93,1,0,0,0,93,19,1,0,
	0,0,94,92,1,0,0,0,8,23,33,39,61,69,78,90,92];

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
