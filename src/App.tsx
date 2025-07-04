import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { ScrollArea } from './components/ui/scroll-area';
import { Separator } from './components/ui/separator';
import { 
  MessageSquare, 
  CreditCard, 
  Bitcoin, 
  Search, 
  Send, 
  X, 
  ArrowUp,
  Sparkles,
  AlertTriangle,
  CheckCircle,
  Clock,
  ExternalLink,
  User,
  Shield,
  TrendingUp,
  Workflow,
  BookOpen,
  RefreshCw
} from 'lucide-react';
import './App.css';

// P0 Components - Required by PRD
const CaseInfoModule = () => {
  const [caseData] = useState({
    caseId: "CS-2025-001234",
    status: "Open",
    priority: "High",
    confidence: 85,
    summary: "Customer contacted support reporting that his wallet was lost over the weekend, which contained his primary Cash App Card ending in 4659.",
    keyProblem: "BTC withdrawal delayed due to exchange batching",
    linkedCases: [
      { id: "CS-2025-001201", summary: "Similar BTC withdrawal issue", status: "Resolved", timeframe: "2 days" },
      { id: "CS-2025-001156", summary: "Exchange batching delay", status: "Resolved", timeframe: "1 day" }
    ],
    linkedTransactions: [
      { id: "TX-BTC-789123", amount: "0.00234 BTC", status: "Pending", linkedBy: "customer" },
      { id: "TX-BTC-789124", amount: "0.00156 BTC", status: "Confirmed", linkedBy: "advocate" }
    ]
  });

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-slate-500" />
              <span className="text-sm text-slate-500">Case #{caseData.caseId}</span>
            </div>
            <Badge variant={caseData.status === 'Open' ? 'destructive' : 'secondary'}>
              {caseData.status}
            </Badge>
          </div>
          <CardTitle className="text-lg">AI Case Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm text-slate-600">{caseData.summary}</p>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span>Confidence: {caseData.confidence}%</span>
              <Badge variant="outline" className="text-xs">
                {caseData.priority} Priority
              </Badge>
            </div>
          </div>
          
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Key Problem</h4>
            <p className="text-sm text-slate-600">{caseData.keyProblem}</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Linked Cases</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {caseData.linkedCases.map((linkedCase) => (
            <div key={linkedCase.id} className="flex items-center justify-between p-2 bg-slate-50 rounded">
              <div className="space-y-1">
                <p className="text-xs font-medium">{linkedCase.id}</p>
                <p className="text-xs text-slate-600">{linkedCase.summary}</p>
              </div>
              <div className="text-right">
                <Badge variant="outline" className="text-xs">
                  {linkedCase.status}
                </Badge>
                <p className="text-xs text-slate-500">{linkedCase.timeframe}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Linked Transactions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {caseData.linkedTransactions.map((tx) => (
            <div key={tx.id} className="flex items-center justify-between p-2 bg-slate-50 rounded">
              <div className="space-y-1">
                <p className="text-xs font-medium">{tx.id}</p>
                <p className="text-xs text-slate-600">{tx.amount}</p>
              </div>
              <div className="text-right">
                <Badge variant={tx.status === 'Pending' ? 'secondary' : 'outline'} className="text-xs">
                  {tx.status}
                </Badge>
                <p className="text-xs text-slate-500">by {tx.linkedBy}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

const CustomerInfoModule = () => {
  const [customerData] = useState({
    legalName: "Samuel L. Jackson",
    displayName: "Samuel L.",
    cashtag: "$samuelj",
    verification: "Verified US",
    riskProfile: "Clean (no flags)",
    accounts: [
      {
        id: "ACC-001",
        displayName: "Samuel L.",
        cashtag: "$samuelj",
        btcBalance: "0.00234 BTC",
        labels: ["EIDV", "Verified"],
        regulatorLink: "REG-001",
        toolboxLink: "TB-001"
      },
      {
        id: "ACC-002",
        displayName: "Samuel Business",
        cashtag: "$samuelbiz",
        btcBalance: "0.01567 BTC",
        labels: ["Business", "Verified"],
        regulatorLink: "REG-002",
        toolboxLink: "TB-002"
      }
    ]
  });

  const [selectedAccount, setSelectedAccount] = useState(0);

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Customer Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-slate-500" />
              <span className="text-sm font-medium">{customerData.legalName}</span>
            </div>
            <p className="text-xs text-slate-600">Display: {customerData.displayName}</p>
            <p className="text-xs text-slate-600">{customerData.cashtag}</p>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-green-500" />
              <span className="text-xs">{customerData.verification}</span>
            </div>
            <p className="text-xs text-slate-600">Risk: {customerData.riskProfile}</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Account Navigation</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={selectedAccount.toString()} onValueChange={(value) => setSelectedAccount(parseInt(value))}>
            <TabsList className="grid w-full grid-cols-2">
              {customerData.accounts.map((account, index) => (
                <TabsTrigger key={account.id} value={index.toString()} className="text-xs">
                  {account.displayName}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {customerData.accounts.map((account, index) => (
              <TabsContent key={account.id} value={index.toString()} className="space-y-3 mt-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Bitcoin className="h-4 w-4 text-orange-500" />
                    <span className="text-sm font-medium">{account.btcBalance}</span>
                  </div>
                  <p className="text-xs text-slate-600">{account.cashtag}</p>
                  
                  <div className="flex flex-wrap gap-1">
                    {account.labels.map((label) => (
                      <Badge key={label} variant="outline" className="text-xs">
                        {label}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 mt-2">
                    <Button variant="outline" size="sm" className="text-xs">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Regulator
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Toolbox
                    </Button>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

const ConversationPanel = () => {
  const [messages] = useState([
    {
      id: 1,
      sender: "customer",
      content: "Why hasn't this BTC withdrawal reached the wallet yet?",
      timestamp: "2:30 PM",
      avatar: "SL"
    },
    {
      id: 2,
      sender: "advocate",
      content: "Hi Samuel! I can see your BTC withdrawal is currently being processed. Let me check the transaction status for you.",
      timestamp: "2:32 PM",
      avatar: "A"
    },
    {
      id: 3,
      sender: "customer",
      content: "It's been over 2 hours now. This is concerning.",
      timestamp: "2:35 PM",
      avatar: "SL"
    }
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Handle message sending logic
      setNewMessage("");
    }
  };

  return (
    <div className="h-full flex flex-col">
      <Card className="flex-1 flex flex-col">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Conversation Panel</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          <ScrollArea className="flex-1 pr-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === 'advocate' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[70%] space-y-1 ${message.sender === 'advocate' ? 'items-end' : 'items-start'} flex flex-col`}>
                    <div className={`p-3 rounded-lg ${
                      message.sender === 'advocate' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-slate-100 text-slate-900'
                    }`}>
                      <p className="text-sm">{message.content}</p>
                    </div>
                    <span className="text-xs text-slate-500">{message.timestamp}</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          
          <div className="mt-4 space-y-2">
            <div className="flex gap-2">
              <Textarea
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-1 min-h-[80px]"
              />
              <Button onClick={handleSendMessage} className="self-end">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const CopilotModule = () => {
  const [copilotInput, setCopilotInput] = useState("");
  const [suggestions] = useState([
    "Report lost card",
    "Generate case notes", 
    "Order replacement",
    "Check transaction status",
    "Escalate to supervisor"
  ]);

  const handleCopilotQuery = () => {
    if (copilotInput.trim()) {
      // Handle copilot query logic
      setCopilotInput("");
    }
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-black" />
              <CardTitle className="text-sm">Support Copilot</CardTitle>
            </div>
            <Button variant="ghost" size="sm">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Case Card from Figma */}
          <Card className="border border-slate-200">
            <CardContent className="p-3 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-slate-500" />
                  <span className="text-sm text-slate-600">Case #2721 8498</span>
                </div>
                <Button variant="ghost" size="sm">
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Case Summary</h4>
                <p className="text-sm text-slate-600">
                  Customer contacted support reporting that his wallet was lost over the weekend, which contained his primary Cash App Card ending in 4659.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Transfer Note */}
          <div className="flex justify-end">
            <div className="space-y-1">
              <div className="bg-slate-100 rounded-md p-2 flex items-center gap-2">
                <CreditCard className="h-4 w-4 text-slate-500" />
                <span className="text-sm">Card reported as lost by @advocateldap</span>
              </div>
              <p className="text-xs text-slate-500 text-right">5:59 pm</p>
            </div>
          </div>

          {/* Suggestions */}
          <div className="space-y-2">
            <div className="flex flex-wrap gap-2">
              {suggestions.slice(0, 3).map((suggestion) => (
                <Button key={suggestion} variant="outline" size="sm" className="text-xs">
                  {suggestion}
                </Button>
              ))}
            </div>
          </div>

          {/* Copilot Input */}
          <div className="space-y-2">
            <div className="bg-slate-50 rounded-xl p-3 flex items-center gap-3">
              <Input
                placeholder="How can copilot help?"
                value={copilotInput}
                onChange={(e) => setCopilotInput(e.target.value)}
                className="flex-1 border-0 bg-transparent"
              />
              <Button onClick={handleCopilotQuery} size="sm" className="rounded-full">
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-slate-400 text-center">
              AI isn't always perfect, so be sure to double check your answers
            </p>
          </div>
        </CardContent>
      </Card>

      {/* P0 Universal Agentic Components */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Universal Tools</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button variant="outline" className="w-full justify-start text-sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Transfer Case
          </Button>
          <Button variant="outline" className="w-full justify-start text-sm">
            <AlertTriangle className="h-4 w-4 mr-2" />
            File Complaint
          </Button>
          <Button variant="outline" className="w-full justify-start text-sm">
            <BookOpen className="h-4 w-4 mr-2" />
            Knowledge Search
          </Button>
        </CardContent>
      </Card>

      {/* P0 BTC Specific Components */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">BTC Copilot</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-2">
            <h4 className="text-xs font-medium">Blockchain Tools</h4>
            <p className="text-xs text-slate-600">Check transaction status on blockchain.</p>
          </div>
          
          <div className="space-y-2">
            <h4 className="text-xs font-medium">Exchange Integration</h4>
            <p className="text-xs text-slate-600">Contact Binance support team.</p>
          </div>
          
          <div className="space-y-2">
            <h4 className="text-xs font-medium">Workflows</h4>
            <p className="text-xs text-slate-600">Withdrawal troubleshooting steps.</p>
          </div>
          
          <div className="space-y-2">
            <h4 className="text-xs font-medium">Knowledge Search</h4>
            <p className="text-xs text-slate-600">Search for BTC-related issues.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// P1/P2 Components - AI-suggested enhancements
const EnhancedComponents = () => {
  return (
    <div className="space-y-4">
      {/* P1 - Performance Metrics */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Performance Metrics
            <Badge variant="secondary" className="text-xs">P1</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>Handle Time: 4.2 min</div>
            <div>Resolution Rate: 87%</div>
            <div>Customer Satisfaction: 4.8/5</div>
            <div>Cases Today: 12</div>
          </div>
        </CardContent>
      </Card>

      {/* P2 - Real-time Collaboration */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm flex items-center gap-2">
            <User className="h-4 w-4" />
            Team Collaboration
            <Badge variant="outline" className="text-xs">P2</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-xs text-slate-600">2 advocates online</p>
          <p className="text-xs text-slate-600">Supervisor available</p>
        </CardContent>
      </Card>

      {/* P2 - Predictive Analytics */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            AI Insights
            <Badge variant="outline" className="text-xs">P2</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <p className="text-xs text-slate-600">Customer Sentiment: Frustrated</p>
            <p className="text-xs text-slate-600">Escalation Risk: Medium</p>
            <p className="text-xs text-slate-600">Suggested Resolution: Exchange contact</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-4 h-screen">
          {/* Left Column - Case Info & Customer Info */}
          <div className="col-span-3 space-y-4">
            <div className="h-1/2 overflow-y-auto">
              <CaseInfoModule />
            </div>
            <div className="h-1/2 overflow-y-auto">
              <CustomerInfoModule />
            </div>
          </div>

          {/* Center Column - Conversation Panel */}
          <div className="col-span-6">
            <ConversationPanel />
          </div>

          {/* Right Column - Copilot & Enhanced Components */}
          <div className="col-span-3 space-y-4 overflow-y-auto">
            <CopilotModule />
            <EnhancedComponents />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App; 