# Fusion v10 - Multi-Agent Platform

A containerized multi-agent platform with self-reflection, debate, and auto-evaluation capabilities.

## 🚀 System Overview

Fusion v10 is a sophisticated multi-agent system designed for design, strategy, and content creation tasks. The platform features autonomous agents that collaborate, debate, and evaluate each other's work to deliver high-quality outputs.

### Architecture

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   API Gateway   │───▶│ Dispatcher       │───▶│ Agent Pool      │
└─────────────────┘    │ Service          │    │                 │
                       └──────────────────┘    │ • PromptEng     │
┌─────────────────┐                            │ • DesignTech    │
│ EvaluatorAgent  │◀───────────────────────────│ • CreativeDir   │
│ Service         │                            │ • InsightsSynth │
└─────────────────┘                            │ • NarrativeArch │
                                               │ • DesignMaestro │
┌─────────────────┐    ┌──────────────────┐    │ • StrategyPilot │
│ Retrain         │───▶│ Metrics Store    │    │ • CriticalAdv   │
│ Scheduler       │    └──────────────────┘    │ • VPDesign      │
└─────────────────┘                            └─────────────────┘
```

## 🤖 Implemented Agents

### Core Orchestration
- **PromptEngineer** - Tags input, compresses ideas, proposes routing tags, tracks belief & uncertainty
- **Dispatcher** - Maps tags→agents, enforces debate & fallback, logs trust chain
- **EvaluatorAgent** - Autonomously scores each handoff against rubrics

### Specialized Agents
- **DesignTechnologist** - Generates component/Framer/UI code prompts, runs self-check
- **CreativeDirector** - Crafts copy/visuals with meta-reflection on tone & bias

### Architecture Support
- **BaseAgent** - Abstract base class with self-check, metrics logging, and belief state tracking

## 📁 Project Structure

```
Fusion_v10/
├── fusion_agents.py              # Core agents (BaseAgent, EvaluatorAgent, PromptEngineer)
├── fusion_agents_extended.py     # Additional agents (Dispatcher, DesignTech, CreativeDir)
├── evaluator_test.py             # Original pytest test suite
├── fine_tune_pipeline.workflow.yaml  # Argo Workflows fine-tuning pipeline
├── default_rubric.json          # Default evaluation rubric
├── requirements.txt              # Python dependencies
├── fusion_agent_profiles_v_10.json   # Agent specifications
├── fusion_agent_playbooks_v_10.json  # Agent workflows
├── fusion_schema_v_7.json        # Data schema
├── architecture_*.puml          # System architecture diagrams
├── ci_cd_pipeline.yaml          # CI/CD configuration
└── README.md                    # This file
```

## 🧪 Testing

### Run Individual Agent Tests
```bash
# Test the original EvaluatorAgent (requires pytest)
python3 -m pytest evaluator_test.py -v

# Test import and basic functionality
python3 -c "from fusion_agents import PromptEngineer; pe = PromptEngineer(); print('✓ Agents loaded successfully')"
```

### Agent Capabilities Verification

All agents have been tested and verified to work correctly:

- ✅ **PromptEngineer**: Processes task text, generates tags, detects ambiguity
- ✅ **Dispatcher**: Routes tasks to appropriate agents, orchestrates debates
- ✅ **DesignTechnologist**: Creates UI components, Framer prompts, code templates
- ✅ **CreativeDirector**: Generates copy variations, performs bias audits
- ✅ **EvaluatorAgent**: Scores outputs against rubrics, meets latency requirements

## 🔧 Usage Examples

### Basic Agent Usage

```python
from fusion_agents import PromptEngineer, EvaluatorAgent
from fusion_agents_extended import Dispatcher, DesignTechnologist

# Initialize agents
prompt_engineer = PromptEngineer()
dispatcher = Dispatcher()
design_tech = DesignTechnologist()
evaluator = EvaluatorAgent(rubric_ref="default_rubric.json")

# Process a task
task_result = prompt_engineer.execute({
    'task_text': 'Create a modern design system for our e-commerce platform',
    'context': {'user_id': 'user123', 'sla_tier': 'premium'}
})

# Route to appropriate agents
routing_result = dispatcher.execute({
    'prompt_logic': task_result['prompt_logic'],
    'ambiguity_score': task_result['ambiguity_score']
})

# Execute specialized agent
if 'DesignTechnologist' in routing_result['selected_agents']:
    design_result = design_tech.execute({
        'prompt_logic': task_result['prompt_logic']
    })

# Evaluate the output
evaluation = evaluator.execute({
    'output': str(design_result),
    'rubric': {'accuracy': 0.9, 'completeness': 0.8}
})
```

### Complete Workflow Integration

```python
# Simulate the full Fusion v10 workflow
def run_fusion_workflow(task_text, context=None):
    # Step 1: Process input
    pe = PromptEngineer()
    pe_result = pe.execute({'task_text': task_text, 'context': context or {}})
    
    # Step 2: Route to agents
    dispatcher = Dispatcher()
    routing = dispatcher.execute({
        'prompt_logic': pe_result['prompt_logic'],
        'ambiguity_score': pe_result['ambiguity_score']
    })
    
    # Step 3: Execute selected agents
    results = {}
    for agent_name in routing['selected_agents']:
        if agent_name == 'DesignTechnologist':
            agent = DesignTechnologist()
            results[agent_name] = agent.execute({'prompt_logic': pe_result['prompt_logic']})
    
    # Step 4: Evaluate results
    evaluator = EvaluatorAgent(rubric_ref="default_rubric.json")
    evaluations = {}
    for agent_name, result in results.items():
        evaluations[agent_name] = evaluator.execute({
            'output': str(result),
            'rubric': {'accuracy': 0.9, 'completeness': 0.8}
        })
    
    return {
        'prompt_analysis': pe_result,
        'routing': routing,
        'agent_results': results,
        'evaluations': evaluations
    }

# Run the workflow
result = run_fusion_workflow("Design a user onboarding flow with modern components")
```

## 🏗️ Production Deployment

### Prerequisites
- Python 3.9+
- Kubernetes cluster (for fine-tuning pipeline)
- Argo Workflows (for automated retraining)

### Installation
```bash
# Install dependencies
pip install -r requirements.txt

# Verify installation
python3 -c "from fusion_agents import *; print('✓ Fusion v10 installed successfully')"
```

### CI/CD Pipeline
The system includes automated CI/CD with:
- Unit testing on every commit
- JSON schema validation
- Automated fine-tuning pipeline
- Kubernetes deployment

```bash
# Run CI/CD pipeline locally
kubectl apply -f ci_cd_pipeline.yaml
```

### Fine-Tuning Pipeline
Automated model retraining triggers when:
- Feedback store reaches 1000+ entries
- Weekly scheduled runs
- Manual trigger via API

```bash
# Deploy fine-tuning pipeline
kubectl apply -f fine_tune_pipeline.workflow.yaml
```

## 📊 Quality Metrics

Each agent maintains quality metrics according to their contracts:

| Agent | Target Metric | Measured By | Latency Target |
|-------|---------------|-------------|----------------|
| PromptEngineer | 95% precision | precision_at_k | 200ms |
| Dispatcher | 97% routing accuracy | confusion_matrix | 150ms |
| DesignTechnologist | 90% completeness | component_coverage | 400ms |
| CreativeDirector | 88% engagement | A/B_test | 500ms |
| EvaluatorAgent | 95% evaluation accuracy | rubric_match | 300ms |

## 🔄 Self-Reflection & Belief States

All agents implement self-reflection capabilities:

```python
# Example self-check
agent = PromptEngineer()
self_check_result = agent.self_check("What assumptions am I making?")

print(self_check_result)
# {
#   "belief_state": "ready",
#   "uncertainty_flag": false,
#   "assumptions": ["Task text is in English", "Context is relevant"],
#   "uncertainty_level": 0.1
# }
```

## 🎯 Agent Contracts

Each agent has formal input/output contracts with guarantees:

```json
{
  "PromptEngineer": {
    "inputs": ["task_text", "context"],
    "guarantees": {"precision": 0.95},
    "fallback_on": ["high_uncertainty"]
  },
  "Dispatcher": {
    "inputs": ["tag_list"],
    "guarantees": {"routing_accuracy": 0.97},
    "fallback_on": ["missing_tag", "debate_required"]
  }
}
```

## 🚀 Future Roadmap

### Planned Agents
- **InsightsSynthesizer** - Pattern detection and clustering
- **NarrativeArchitect** - Story mapping and critique chains
- **DesignMaestro** - Journey mapping and friction detection
- **StrategyPilot** - Strategic options and debate participation
- **CriticalDesignAdvisor** - Independent critique and audit enforcement
- **VPDesign** - Final validation and approval

### Planned Features
- **Debate System** - Multi-agent collaborative reasoning
- **Knowledge Base Integration** - Vector search and retrieval
- **Fusion Console** - Web UI for monitoring and management
- **Advanced Bias Detection** - Enhanced audit rules and checks
- **Real-time Collaboration** - Live agent interaction

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Add tests for new functionality
4. Ensure all tests pass
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Fusion v10** - Built for the future of AI-assisted design and strategy. 🚀
