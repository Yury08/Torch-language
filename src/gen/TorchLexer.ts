// Generated from Torch.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class TorchLexer extends Lexer {
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
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
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
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
		"T__17", "T__18", "T__19", "T__20", "ID", "INT", "WS", "COMMENT",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, TorchLexer._ATN, TorchLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "Torch.g4"; }

	public get literalNames(): (string | null)[] { return TorchLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return TorchLexer.symbolicNames; }
	public get ruleNames(): string[] { return TorchLexer.ruleNames; }

	public get serializedATN(): number[] { return TorchLexer._serializedATN; }

	public get channelNames(): string[] { return TorchLexer.channelNames; }

	public get modeNames(): string[] { return TorchLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,25,142,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,
	2,24,7,24,1,0,1,0,1,0,1,0,1,1,1,1,1,2,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,
	6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,10,1,10,1,10,
	1,11,1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,14,1,15,1,15,1,15,1,16,1,
	16,1,16,1,16,1,16,1,16,1,16,1,17,1,17,1,18,1,18,1,19,1,19,1,20,1,20,1,21,
	1,21,5,21,115,8,21,10,21,12,21,118,9,21,1,22,4,22,121,8,22,11,22,12,22,
	122,1,23,4,23,126,8,23,11,23,12,23,127,1,23,1,23,1,24,1,24,1,24,1,24,5,
	24,136,8,24,10,24,12,24,139,9,24,1,24,1,24,0,0,25,1,1,3,2,5,3,7,4,9,5,11,
	6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,16,33,17,35,18,
	37,19,39,20,41,21,43,22,45,23,47,24,49,25,1,0,5,4,0,42,42,65,90,95,95,97,
	122,4,0,48,57,65,90,95,95,97,122,1,0,48,57,2,0,9,10,13,13,2,0,10,10,13,
	13,145,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,
	1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,
	0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,
	1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,
	0,0,45,1,0,0,0,0,47,1,0,0,0,0,49,1,0,0,0,1,51,1,0,0,0,3,55,1,0,0,0,5,57,
	1,0,0,0,7,60,1,0,0,0,9,62,1,0,0,0,11,64,1,0,0,0,13,66,1,0,0,0,15,68,1,0,
	0,0,17,74,1,0,0,0,19,79,1,0,0,0,21,81,1,0,0,0,23,84,1,0,0,0,25,87,1,0,0,
	0,27,89,1,0,0,0,29,91,1,0,0,0,31,94,1,0,0,0,33,97,1,0,0,0,35,104,1,0,0,
	0,37,106,1,0,0,0,39,108,1,0,0,0,41,110,1,0,0,0,43,112,1,0,0,0,45,120,1,
	0,0,0,47,125,1,0,0,0,49,131,1,0,0,0,51,52,5,108,0,0,52,53,5,101,0,0,53,
	54,5,116,0,0,54,2,1,0,0,0,55,56,5,61,0,0,56,4,1,0,0,0,57,58,5,105,0,0,58,
	59,5,102,0,0,59,6,1,0,0,0,60,61,5,40,0,0,61,8,1,0,0,0,62,63,5,41,0,0,63,
	10,1,0,0,0,64,65,5,123,0,0,65,12,1,0,0,0,66,67,5,125,0,0,67,14,1,0,0,0,
	68,69,5,119,0,0,69,70,5,104,0,0,70,71,5,105,0,0,71,72,5,108,0,0,72,73,5,
	101,0,0,73,16,1,0,0,0,74,75,5,102,0,0,75,76,5,117,0,0,76,77,5,110,0,0,77,
	78,5,99,0,0,78,18,1,0,0,0,79,80,5,44,0,0,80,20,1,0,0,0,81,82,5,61,0,0,82,
	83,5,61,0,0,83,22,1,0,0,0,84,85,5,33,0,0,85,86,5,61,0,0,86,24,1,0,0,0,87,
	88,5,60,0,0,88,26,1,0,0,0,89,90,5,62,0,0,90,28,1,0,0,0,91,92,5,60,0,0,92,
	93,5,61,0,0,93,30,1,0,0,0,94,95,5,62,0,0,95,96,5,61,0,0,96,32,1,0,0,0,97,
	98,5,114,0,0,98,99,5,101,0,0,99,100,5,116,0,0,100,101,5,117,0,0,101,102,
	5,114,0,0,102,103,5,110,0,0,103,34,1,0,0,0,104,105,5,42,0,0,105,36,1,0,
	0,0,106,107,5,47,0,0,107,38,1,0,0,0,108,109,5,43,0,0,109,40,1,0,0,0,110,
	111,5,45,0,0,111,42,1,0,0,0,112,116,7,0,0,0,113,115,7,1,0,0,114,113,1,0,
	0,0,115,118,1,0,0,0,116,114,1,0,0,0,116,117,1,0,0,0,117,44,1,0,0,0,118,
	116,1,0,0,0,119,121,7,2,0,0,120,119,1,0,0,0,121,122,1,0,0,0,122,120,1,0,
	0,0,122,123,1,0,0,0,123,46,1,0,0,0,124,126,7,3,0,0,125,124,1,0,0,0,126,
	127,1,0,0,0,127,125,1,0,0,0,127,128,1,0,0,0,128,129,1,0,0,0,129,130,6,23,
	0,0,130,48,1,0,0,0,131,132,5,47,0,0,132,133,5,47,0,0,133,137,1,0,0,0,134,
	136,8,4,0,0,135,134,1,0,0,0,136,139,1,0,0,0,137,135,1,0,0,0,137,138,1,0,
	0,0,138,140,1,0,0,0,139,137,1,0,0,0,140,141,6,24,0,0,141,50,1,0,0,0,5,0,
	116,122,127,137,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!TorchLexer.__ATN) {
			TorchLexer.__ATN = new ATNDeserializer().deserialize(TorchLexer._serializedATN);
		}

		return TorchLexer.__ATN;
	}


	static DecisionsToDFA = TorchLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}