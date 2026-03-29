export const situations = [
  {
    id: 'firing',
    icon: '\u{1F534}',
    iconBg: '#fef2f2',
    title: 'Termination',
    description: 'Prepare to deliver a termination decision with clarity, empathy, and legal safety.',
    badge: { text: 'HIGH STAKES', bg: '#fef2f2', color: '#dc2626' },
    detailTitle: 'Termination Conversation',
    detailSubtitle: "A structured, empathetic approach to delivering a termination decision while protecting the employee's dignity and the company's interests.",
    tabs: [
      {
        label: '\u{1F5FA}\uFE0F Strategy',
        sections: [
          {
            title: '\u{1F4CC} Conversation Structure (B.R.I.E.F. Model)',
            type: 'ol',
            items: [
              '<strong>B \u2014 Background:</strong> Open with context. "Thank you for meeting with me. I want to speak with you directly about a decision that has been made."',
              '<strong>R \u2014 Reason:</strong> State the reason clearly and without ambiguity. "After careful review, we\u2019ve decided to end your employment, effective [date]."',
              '<strong>I \u2014 Information:</strong> Share logistics \u2014 last day, severance, benefits continuation, return of property.',
              '<strong>E \u2014 Emotion:</strong> Acknowledge their feelings. "I understand this is difficult news, and it\'s okay to take a moment."',
              '<strong>F \u2014 Future:</strong> Outline next steps \u2014 reference letters, outplacement support, who to contact for questions.',
            ],
          },
          {
            title: '\u{1F3AF} Key Principles',
            type: 'ul',
            items: [
              'The decision is <strong>final</strong> \u2014 do not present it as open for debate.',
              'Keep the meeting to <strong>15\u201320 minutes</strong>. Longer meetings increase emotional escalation.',
              'Have a <strong>witness</strong> present (another HR rep or manager).',
              'Choose a <strong>private, neutral</strong> room. Avoid the employee\'s own workspace.',
              'Schedule for <strong>mid-week, mid-morning</strong> \u2014 avoids the "Friday afternoon fire" stigma.',
            ],
          },
          {
            title: '\u{1F4DD} Sample Opening Script',
            type: 'script',
            text: '"Hi [Name], thanks for coming in. I have [Witness Name] with me today. I want to be straightforward with you \u2014 after thorough consideration, we\'ve made the decision to end your employment with [Company], effective [Date]. I know this is hard to hear, and I want to walk you through what happens next and answer any questions about the process."',
          },
        ],
      },
      {
        label: '\u26A0\uFE0F Risk Analysis',
        sections: [
          {
            title: '\u{1F534} Legal Risks',
            type: 'ul',
            items: [
              '<strong>Wrongful termination claim:</strong> Ensure documentation of performance issues or conduct exists. Have legal review the file beforehand.',
              '<strong>Discrimination allegation:</strong> Confirm the decision cannot be linked to a protected class. Audit termination patterns across demographics.',
              '<strong>Retaliation risk:</strong> If the employee recently filed a complaint, consult legal before proceeding.',
              '<strong>Contractual obligations:</strong> Review employment agreement for notice periods, severance clauses, or non-compete terms.',
            ],
          },
          {
            title: '\u{1F7E1} Reputational Risks',
            type: 'ul',
            items: [
              'The employee may share their experience publicly (Glassdoor, social media). A respectful process minimises negative fallout.',
              'Remaining team members will judge how you handle this. Silence or coldness erodes psychological safety.',
              'Over-explaining publicly violates confidentiality \u2014 keep team communication factual and brief.',
            ],
          },
          {
            title: '\u{1F7E2} Mitigation Strategies',
            type: 'ul',
            items: [
              'Provide a <strong>generous transition package</strong> where budget allows (severance, extended benefits, outplacement).',
              'Allow the employee to <strong>say goodbye</strong> in a dignified way unless there is a security concern.',
              'Prepare a <strong>team talking-points memo</strong> for the manager to address the team within 24 hours.',
            ],
          },
        ],
      },
      {
        label: '\u{1F9E0} Psychology & Tone',
        sections: [
          {
            title: '\u{1F4A1} Psychological Framework: K\u00FCbler-Ross Adapted',
            type: 'p',
            text: 'Expect the employee to cycle through <strong>shock \u2192 denial \u2192 anger \u2192 bargaining \u2192 sadness</strong>. Your job is NOT to resolve their grief \u2014 it\'s to hold space for the initial reaction and guide them to next steps. Resist the urge to over-explain or justify \u2014 it prolongs the pain and invites debate.',
          },
          {
            title: '\u{1F399}\uFE0F Tone Coaching',
            type: 'ul',
            items: [
              '<strong>Warm but firm.</strong> Your voice should convey respect, not guilt. Guilt triggers over-apologising, which confuses the message.',
              '<strong>Slow your pace.</strong> Speak 20% slower than normal. Pause after delivering the news.',
              '<strong>Use their name.</strong> It humanises the interaction and signals respect.',
              '<strong>Avoid hedging language</strong> ("sort of", "kind of", "unfortunately we had to\u2026"). Be clear and direct.',
              '<strong>Mirror their emotion, not their energy.</strong> If they get angry, stay calm but acknowledge: "I can see you\'re upset, and that makes sense."',
            ],
          },
          {
            title: '\u{1F6AB} Phrases to Avoid',
            type: 'ul',
            items: [
              '"This is harder for me than it is for you." \u2014 No, it isn\'t.',
              '"We\'re like a family here." \u2014 Families don\'t fire each other.',
              '"It\'s nothing personal." \u2014 It is deeply personal to them.',
              '"You\'ll land on your feet." \u2014 Minimises their experience.',
            ],
          },
          {
            title: '\u2705 Phrases That Work',
            type: 'ul',
            items: [
              '"I respect the contributions you\'ve made here."',
              '"I want to make this transition as smooth as possible for you."',
              '"You\'re welcome to take a moment before we continue."',
              '"Here\'s what support we\'re providing\u2026"',
            ],
          },
        ],
      },
      {
        label: '\u2705 Checklist',
        sections: [
          {
            title: '\u{1F4CB} Before the Meeting',
            type: 'ul',
            items: [
              '\u2610 Legal review of termination documentation complete',
              '\u2610 Severance package details confirmed with Comp & Benefits',
              '\u2610 Final paycheck and PTO payout calculated',
              '\u2610 IT notified for system access revocation (timed to meeting)',
              '\u2610 Witness identified and briefed',
              '\u2610 Private room booked',
              '\u2610 Termination letter printed and reviewed',
              '\u2610 Outplacement or career transition resources prepared',
            ],
          },
          {
            title: '\u{1F4CB} During the Meeting',
            type: 'ul',
            items: [
              '\u2610 Deliver the decision within the first 60 seconds',
              '\u2610 State the effective date clearly',
              '\u2610 Hand over the termination letter',
              '\u2610 Walk through severance and benefits',
              '\u2610 Allow questions \u2014 answer process questions, defer others',
              '\u2610 Provide the point-of-contact for follow-up',
            ],
          },
          {
            title: '\u{1F4CB} After the Meeting',
            type: 'ul',
            items: [
              '\u2610 Escort the employee to collect belongings (if same day)',
              '\u2610 Confirm IT access revocation',
              '\u2610 Brief the direct manager on team communication',
              '\u2610 Send the team talking-points memo',
              '\u2610 File all documents in the employee\'s HR record',
              '\u2610 Schedule a debrief with the manager within 48 hours',
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'demotion',
    icon: '\u2B07\uFE0F',
    iconBg: '#fefce8',
    title: 'Demotion',
    description: 'Navigate the sensitive conversation around a role or level change.',
    badge: { text: 'SENSITIVE', bg: '#fefce8', color: '#ca8a04' },
    detailTitle: 'Demotion Conversation',
    detailSubtitle: "Navigate the difficult conversation around a role or level change while preserving the employee's motivation and self-worth.",
    tabs: [
      {
        label: '\u{1F5FA}\uFE0F Strategy',
        sections: [
          {
            title: '\u{1F4CC} Conversation Arc',
            type: 'ol',
            items: [
              '<strong>Set the context:</strong> "I want to have an open conversation about your role and how we can best set you up for success going forward."',
              '<strong>Explain the business rationale:</strong> Be specific \u2014 restructuring, scope change, performance gap. Avoid vague reasoning.',
              '<strong>State the change:</strong> "We\'re moving your role to [new title/level], effective [date]."',
              '<strong>Acknowledge impact:</strong> "I know this isn\'t the news you want to hear, and I respect your feelings about it."',
              '<strong>Reframe the narrative:</strong> Position it as a reset, not a punishment. Highlight what success looks like in the new role.',
              '<strong>Discuss compensation:</strong> If pay changes, be transparent. If it stays, say so \u2014 it\'s a relief point.',
            ],
          },
          {
            title: '\u{1F4DD} Sample Script',
            type: 'script',
            text: '"Hi [Name], I want to talk with you about a change to your role. Based on [specific reason \u2014 restructuring / feedback / performance data], we\'ve decided to adjust your position to [new role]. This isn\'t about your value to the team \u2014 it\'s about finding the right fit where you can thrive. I want to discuss what this looks like and how we support you through this."',
          },
        ],
      },
      {
        label: '\u26A0\uFE0F Risk Analysis',
        sections: [
          {
            title: '\u{1F534} Key Risks',
            type: 'ul',
            items: [
              '<strong>Flight risk:</strong> The employee may start job-searching immediately. Be prepared for this outcome and have a contingency.',
              '<strong>Public humiliation:</strong> If peers learn about the demotion through gossip, trust collapses. Control the narrative.',
              '<strong>Constructive dismissal claim:</strong> If the demotion is severe enough (major pay cut, status loss), consult legal \u2014 it could be seen as forcing a resignation.',
              '<strong>Team morale:</strong> Others may wonder "Am I next?" \u2014 the manager must proactively reassure the team without revealing details.',
            ],
          },
          {
            title: '\u{1F7E2} Mitigation',
            type: 'ul',
            items: [
              'Let the employee have input on <strong>how the change is communicated</strong> to peers.',
              'Offer a <strong>clear growth path</strong> back \u2014 "Here\'s what re-promotion looks like."',
              'Consider a <strong>title adjustment</strong> that minimises the perception of demotion (e.g., "Senior Specialist" vs. stripping "Manager").',
              'Pair with <strong>coaching or mentorship</strong> to signal investment, not abandonment.',
            ],
          },
        ],
      },
      {
        label: '\u{1F9E0} Psychology & Tone',
        sections: [
          {
            title: '\u{1F4A1} Identity Threat Response',
            type: 'p',
            text: 'A demotion strikes at <strong>identity</strong>. People attach their self-worth to titles and status. Expect defensiveness driven by ego protection, not logic. Use <strong>self-affirmation theory</strong>: before the hard news, affirm their strengths and contributions genuinely. This lowers defensiveness and increases openness to the message.',
          },
          {
            title: '\u{1F399}\uFE0F Tone Coaching',
            type: 'ul',
            items: [
              '<strong>Collaborative, not authoritative.</strong> Use "we" language: "We want to find the right path for you."',
              '<strong>Avoid pity.</strong> Empathy \u2260 pity. Pity disempowers; empathy validates.',
              '<strong>Be specific in praise.</strong> Generic compliments feel hollow. "Your client work on the [X] project was outstanding" > "You\'re great."',
              '<strong>Give them time.</strong> Don\'t rush to fill silence. Let them process.',
              '<strong>Don\'t promise what you can\'t deliver.</strong> If re-promotion isn\'t guaranteed, don\'t imply it is.',
            ],
          },
          {
            title: '\u2705 Power Phrases',
            type: 'ul',
            items: [
              '"Your expertise in [X] is something we genuinely value."',
              '"This is about alignment, not ability."',
              '"I want to be transparent so you can make informed decisions about your career here."',
              '"Let\'s talk about what excelling in this role looks like."',
            ],
          },
        ],
      },
      {
        label: '\u2705 Checklist',
        sections: [
          {
            title: '\u{1F4CB} Before the Meeting',
            type: 'ul',
            items: [
              '\u2610 Document the specific business rationale (restructuring, performance data, scope change)',
              '\u2610 Confirm new role title, level, and effective date',
              '\u2610 Determine compensation impact and get Comp & Benefits sign-off',
              '\u2610 Consult legal to assess constructive dismissal risk',
              '\u2610 Align with the direct manager on messaging and support plan',
              '\u2610 Prepare a clear growth path back (re-promotion criteria)',
              '\u2610 Draft a communication plan for the broader team',
              '\u2610 Book a private room \u2014 never deliver this in a shared space',
            ],
          },
          {
            title: '\u{1F4CB} During the Meeting',
            type: 'ul',
            items: [
              '\u2610 State the change clearly within the first 2 minutes',
              '\u2610 Explain the specific business rationale',
              '\u2610 Acknowledge emotional impact \u2014 pause and allow reaction',
              '\u2610 Walk through compensation changes (or confirm no change)',
              '\u2610 Present the new role expectations and success criteria',
              '\u2610 Share the path to re-promotion with concrete milestones',
              '\u2610 Ask how they want the change communicated to peers',
              '\u2610 Offer coaching or mentorship as ongoing support',
            ],
          },
          {
            title: '\u{1F4CB} After the Meeting',
            type: 'ul',
            items: [
              '\u2610 Send written confirmation of the role change and terms',
              '\u2610 Update HRIS with new title, level, and compensation',
              '\u2610 Execute the agreed team communication plan within 24\u201348 hours',
              '\u2610 Brief the manager on monitoring morale and engagement',
              '\u2610 Schedule a 30-day check-in with the employee',
              '\u2610 Arrange coaching or mentorship sessions if offered',
              '\u2610 Monitor for flight risk signals over the next 60 days',
              '\u2610 File all documentation in the employee\'s HR record',
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'pip',
    icon: '\u{1F4CB}',
    iconBg: '#f0fdf4',
    title: 'PIP Kick-off',
    description: 'Launch a Performance Improvement Plan with fairness and motivation.',
    badge: { text: 'STRUCTURED', bg: '#f0fdf4', color: '#16a34a' },
    detailTitle: 'PIP Kick-off Conversation',
    detailSubtitle: "Launch a Performance Improvement Plan with fairness, clarity, and genuine investment in the employee's success.",
    tabs: [
      {
        label: '\u{1F5FA}\uFE0F Strategy',
        sections: [
          {
            title: '\u{1F4CC} Conversation Framework (S.T.A.R.T.)',
            type: 'ol',
            items: [
              '<strong>S \u2014 Situation:</strong> "I want to discuss your performance over the past [timeframe] and share a plan to support your improvement."',
              '<strong>T \u2014 Tell the gap:</strong> Be specific with data. "In Q3, your target was X, and you delivered Y. Here are 3 specific examples\u2026"',
              '<strong>A \u2014 Action plan:</strong> Walk through the PIP document \u2014 goals, metrics, timeline (typically 30/60/90 days), check-in cadence.',
              '<strong>R \u2014 Resources:</strong> "Here\'s the support we\'re providing \u2014 coaching, training, adjusted workload, weekly 1:1s."',
              '<strong>T \u2014 Timeline & consequences:</strong> "If goals are met, you continue in your role. If not, we\'ll need to discuss next steps, which may include separation."',
            ],
          },
          {
            title: '\u{1F3AF} Critical Success Factors',
            type: 'ul',
            items: [
              'The PIP must feel like a <strong>genuine opportunity</strong>, not a paper trail for termination.',
              'Goals must be <strong>S.M.A.R.T.</strong> \u2014 specific, measurable, achievable, relevant, time-bound.',
              'The employee should <strong>not be blindsided</strong>. Prior verbal/written feedback should have preceded this.',
              'Ensure the <strong>manager commits</strong> to regular check-ins and active support.',
              'Document <strong>everything</strong> \u2014 conversations, progress, support provided.',
            ],
          },
          {
            title: '\u{1F4DD} Opening Script',
            type: 'script',
            text: '"Hi [Name], thanks for sitting down with me. I want to have an honest conversation about where things stand with your performance. My goal today is not to criticise you, but to share a structured plan that gives you the best chance to succeed. I\'ve prepared a Performance Improvement Plan, and I want to walk you through it together."',
          },
        ],
      },
      {
        label: '\u26A0\uFE0F Risk Analysis',
        sections: [
          {
            title: '\u{1F534} Risks',
            type: 'ul',
            items: [
              '<strong>Employee sees PIP as pre-termination:</strong> This is the #1 perception problem. Counter it with genuine support actions, not just words.',
              '<strong>Manager disengagement:</strong> If the manager doesn\'t actually coach during the PIP, it becomes a self-fulfilling prophecy. Hold the manager accountable.',
              '<strong>Discrimination claim:</strong> If the PIP disproportionately targets certain groups, audit your PIP data. Ensure consistency across the org.',
              '<strong>Union/works council involvement:</strong> In some jurisdictions, PIPs trigger employee rep involvement. Check local requirements.',
              '<strong>Morale contagion:</strong> Close colleagues may feel anxious. Manager should proactively (without revealing details) reinforce team stability.',
            ],
          },
          {
            title: '\u{1F7E2} Mitigation',
            type: 'ul',
            items: [
              'Share <strong>success stories</strong> (anonymised) of employees who completed PIPs and thrived.',
              'Give the employee <strong>a voice</strong> \u2014 let them add their own goals or suggest support they need.',
              'Set <strong>interim milestones</strong> so progress is visible early \u2014 small wins build momentum.',
              'Consider assigning a <strong>peer mentor</strong> (with consent) for additional support.',
            ],
          },
        ],
      },
      {
        label: '\u{1F9E0} Psychology & Tone',
        sections: [
          {
            title: '\u{1F4A1} Growth Mindset Framing (Dweck)',
            type: 'p',
            text: 'Research by Carol Dweck shows that people perform better when they believe abilities can be developed. Frame the PIP using <strong>growth mindset language</strong>: "This plan is built on the belief that with the right focus and support, you can close this gap." Avoid <strong>fixed mindset signals</strong> like "You\'re not cut out for this" or "Some people just aren\'t\u2026"',
          },
          {
            title: '\u{1F399}\uFE0F Tone Coaching',
            type: 'ul',
            items: [
              '<strong>Coaching tone, not disciplinary tone.</strong> Think "sports coach at halftime," not "principal\'s office."',
              '<strong>Use "and" instead of "but."</strong> "You have strong technical skills AND there\'s a gap in stakeholder communication." vs. "You have strong skills BUT\u2026"',
              '<strong>Normalise struggle.</strong> "Performance dips happen. What matters is what we do about it."',
              '<strong>Show personal investment.</strong> "I\'m committed to supporting you through this because I\'ve seen what you\'re capable of."',
              '<strong>Be honest about consequences</strong> without leading with threats. State them once, clearly, then move to the support plan.',
            ],
          },
          {
            title: '\u{1F6AB} Don\'ts',
            type: 'ul',
            items: [
              'Don\'t compare them to colleagues. Ever.',
              'Don\'t use the meeting to air old grievances \u2014 focus on forward-looking goals.',
              'Don\'t cc the entire leadership chain on the PIP email \u2014 respect confidentiality.',
              'Don\'t set impossible goals to engineer failure. It\'s unethical and legally risky.',
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'conflict',
    icon: '\u26A1',
    iconBg: '#eff6ff',
    title: 'Employee Conflict',
    description: 'Mediate a conflict between two employees and restore team dynamics.',
    badge: { text: 'MEDIATION', bg: '#eff6ff', color: '#2563eb' },
    detailTitle: 'Employee Conflict Mediation',
    detailSubtitle: 'Facilitate a resolution between two employees in conflict while restoring trust and team cohesion.',
    tabs: [
      {
        label: '\u{1F5FA}\uFE0F Strategy',
        sections: [
          {
            title: '\u{1F4CC} 3-Phase Mediation Process',
            type: 'ol',
            items: [
              '<strong>Phase 1 \u2014 Individual Meetings:</strong> Meet each person separately first. Listen without judging. Ask: "Tell me what happened from your perspective." / "How is this affecting your work?" / "What would resolution look like for you?"',
              '<strong>Phase 2 \u2014 Joint Session:</strong> Bring both together. Set ground rules: no interrupting, speak in "I" statements, focus on behaviours not character. Facilitate active listening \u2014 have each person summarise what the other said.',
              '<strong>Phase 3 \u2014 Agreement & Follow-up:</strong> Co-create a forward-looking agreement. Write down commitments. Schedule a follow-up check-in in 2\u20134 weeks.',
            ],
          },
          {
            title: '\u{1F3AF} Ground Rules for the Joint Session',
            type: 'ul',
            items: [
              'Each person gets uninterrupted time to share their perspective.',
              'Focus on <strong>specific behaviours and impact</strong>, not character judgments.',
              'Use <strong>"I" statements</strong>: "I felt excluded when\u2026" not "You always\u2026"',
              'The goal is <strong>a workable path forward</strong>, not determining who\'s "right."',
              'Confidentiality \u2014 what\'s said in this room stays in this room.',
            ],
          },
          {
            title: '\u{1F4DD} Opening Script (Joint Session)',
            type: 'script',
            text: '"Thank you both for being here. I know this isn\'t easy, and I respect you both for being willing to work through this. My role today isn\'t to be a judge \u2014 it\'s to help you hear each other and find a path forward. Here are the ground rules: [state rules]. Let\'s start. [Name A], can you share your perspective on what\'s been happening?"',
          },
        ],
      },
      {
        label: '\u26A0\uFE0F Risk Analysis',
        sections: [
          {
            title: '\u{1F534} Risks',
            type: 'ul',
            items: [
              '<strong>Escalation during session:</strong> Emotions may spike. Have a plan to call a break: "Let\'s pause for 5 minutes and come back."',
              '<strong>Power imbalance:</strong> If one party is senior or more dominant, the other may shut down. Equalise airtime actively.',
              '<strong>Underlying harassment/discrimination:</strong> What looks like "conflict" may actually be a harassment issue. Screen for this in individual meetings.',
              '<strong>Taking sides:</strong> If either party perceives HR as biased, the process fails. Maintain strict neutrality in language and body language.',
              '<strong>Retaliation post-mediation:</strong> Monitor for passive-aggressive behaviour, exclusion, or escalation after the session.',
            ],
          },
          {
            title: '\u{1F7E2} Mitigation',
            type: 'ul',
            items: [
              'Document agreements in writing and have both parties sign.',
              'Schedule a <strong>mandatory follow-up</strong> \u2014 don\'t leave resolution to chance.',
              'If the conflict is severe or involves allegations, <strong>escalate to a formal investigation</strong> rather than mediating.',
              'Consider involving an <strong>external mediator</strong> for high-stakes or deeply personal conflicts.',
              'Equip the manager with tools to <strong>monitor team dynamics</strong> post-mediation.',
            ],
          },
        ],
      },
      {
        label: '\u{1F9E0} Psychology & Tone',
        sections: [
          {
            title: '\u{1F4A1} The Dual Concern Model',
            type: 'p',
            text: 'People in conflict typically adopt one of five styles: <strong>Competing, Avoiding, Accommodating, Compromising, or Collaborating</strong>. Your goal as mediator is to move both parties toward <strong>Collaboration</strong> \u2014 high concern for self AND high concern for the other. This means helping each person understand: "Getting what you need doesn\'t require the other person to lose."',
          },
          {
            title: '\u{1F399}\uFE0F Facilitation Techniques',
            type: 'ul',
            items: [
              '<strong>Reflective listening:</strong> "What I\'m hearing is\u2026 Is that right?" This slows emotional reactivity.',
              '<strong>Reframing:</strong> Convert attacks into needs. "You never listen" \u2192 "It sounds like you need to feel heard in meetings."',
              '<strong>Bridging:</strong> Highlight common ground. "You both want the project to succeed. Let\'s start there."',
              '<strong>Normalising:</strong> "Workplace disagreements are normal. What matters is how we move through them."',
              '<strong>Future focus:</strong> Redirect from "what happened" to "what do we want going forward?"',
            ],
          },
          {
            title: '\u2705 Key Phrases',
            type: 'ul',
            items: [
              '"Help me understand your perspective."',
              '"What would it look like if this were resolved?"',
              '"Can you say more about how that impacted you?"',
              '"I want to make sure you both feel heard."',
              '"What\'s one thing each of you could commit to this week?"',
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'manager',
    icon: '\u{1F454}',
    iconBg: '#faf5ff',
    title: 'Underperforming Manager',
    description: 'Coach a manager who needs to step up their leadership effectiveness.',
    badge: { text: 'COACHING', bg: '#faf5ff', color: '#9333ea' },
    detailTitle: 'Underperforming Manager Conversation',
    detailSubtitle: 'Coach a manager who needs to elevate their leadership \u2014 increase accountability, decision-making, and team management effectiveness.',
    tabs: [
      {
        label: '\u{1F5FA}\uFE0F Strategy',
        sections: [
          {
            title: '\u{1F4CC} Coaching Conversation Structure',
            type: 'ol',
            items: [
              '<strong>Open with data, not opinion:</strong> "I want to share some observations and data points about your team\'s dynamics and get your perspective."',
              '<strong>Share 360\u00B0 feedback themes:</strong> Present patterns, not individual quotes. "A theme across feedback is that decisions feel delayed and the team wants clearer direction."',
              '<strong>Explore root causes:</strong> "What\'s getting in the way? Is it workload, confidence, skill, or something else?"',
              '<strong>Co-create a development plan:</strong> Work together on 2\u20133 specific behavioural shifts with measurable outcomes.',
              '<strong>Set the stakes:</strong> "I believe you can do this, and I want to support you. And I also want to be transparent \u2014 the team needs this shift, and it needs to happen in [timeframe]."',
            ],
          },
          {
            title: '\u{1F3AF} Common Manager Gaps & Interventions',
            type: 'ul',
            items: [
              '<strong>Avoids tough conversations:</strong> Role-play difficult scenarios. Provide scripts. Pair with a senior leader for shadowing.',
              '<strong>Micromanages:</strong> Coach on delegation frameworks (RACI). Set a challenge: "This week, delegate one decision you\'d normally make yourself."',
              '<strong>Lacks strategic thinking:</strong> Assign a business case or strategy exercise. Include in leadership offsites.',
              '<strong>Poor communication:</strong> Provide feedback on specific instances. Offer executive communication coaching.',
              '<strong>Doesn\'t hold team accountable:</strong> Introduce structured 1:1s and goal-tracking rituals. Model accountability conversations.',
            ],
          },
          {
            title: '\u{1F4DD} Opening Script',
            type: 'script',
            text: '"Hi [Name], I wanted to have a developmental conversation with you \u2014 not a performance review, but an honest check-in on your leadership. I\'ve gathered some feedback and data points, and I\'d like to share them, hear your perspective, and work together on a plan. I\'m doing this because I believe in your potential and I want to help you succeed in this role."',
          },
        ],
      },
      {
        label: '\u26A0\uFE0F Risk Analysis',
        sections: [
          {
            title: '\u{1F534} Risks',
            type: 'ul',
            items: [
              '<strong>Defensiveness:</strong> Managers often see feedback as a threat to their authority. Lead with curiosity, not criticism.',
              '<strong>Learned helplessness:</strong> Some managers have never received honest feedback. Overloading them may paralyse rather than motivate.',
              '<strong>Skip-level complaints:</strong> If their team is escalating to you, the manager may feel undermined. Be transparent about how you received information.',
              '<strong>Losing the manager:</strong> Top performers who are poor managers may quit if they feel "demoted" to coaching. Position it as leadership investment.',
              '<strong>No change after coaching:</strong> If behaviour doesn\'t shift in 60\u201390 days, a formal PIP or role change may be needed. Set that expectation early.',
            ],
          },
          {
            title: '\u{1F7E2} Mitigation',
            type: 'ul',
            items: [
              'Use <strong>external coaching</strong> (ICF-certified) for high-potential managers \u2014 it removes the HR/power dynamic.',
              'Create a <strong>peer support group</strong> of managers facing similar challenges \u2014 normalises the growth process.',
              'Celebrate <strong>early wins publicly</strong> to reinforce positive change.',
              'Give them a <strong>leadership book or course</strong> as a signal of investment, not remediation.',
              'If the manager cannot lead, explore <strong>individual contributor paths</strong> \u2014 not everyone is meant to manage.',
            ],
          },
        ],
      },
      {
        label: '\u{1F9E0} Psychology & Tone',
        sections: [
          {
            title: '\u{1F4A1} Situational Leadership Model (Hersey & Blanchard)',
            type: 'p',
            text: 'Not all managers need the same intervention. Assess their <strong>competence</strong> (skill) and <strong>commitment</strong> (motivation). A manager with <strong>high skill but low motivation</strong> needs inspiration and autonomy. A manager with <strong>low skill but high motivation</strong> needs structured coaching and training. Match your approach to their quadrant \u2014 one size does not fit all.',
          },
          {
            title: '\u{1F399}\uFE0F Tone Coaching',
            type: 'ul',
            items: [
              '<strong>Peer-to-peer, not parent-to-child.</strong> Managers respond to being treated as equals, not subordinates.',
              '<strong>Ask more than tell.</strong> "What do you think is causing the team friction?" > "Your team is frustrated with you."',
              '<strong>Use Socratic questioning.</strong> Guide them to their own insights: "If you were on your team, what would you want from your manager?"',
              '<strong>Be vulnerable.</strong> Share your own leadership struggles (briefly) to normalise imperfection.',
              '<strong>Separate identity from behaviour.</strong> "This isn\'t about who you are \u2014 it\'s about what the team is experiencing."',
            ],
          },
          {
            title: '\u2705 Power Phrases',
            type: 'ul',
            items: [
              '"I\'m having this conversation because I see leadership potential in you."',
              '"The best managers I\'ve worked with all had a moment where they had to level up. This is yours."',
              '"What would your ideal team dynamic look like? Let\'s work backward from there."',
              '"I\'m not here to tell you what to do \u2014 I\'m here to help you figure it out."',
              '"What\'s one thing you could do differently this week that would signal change to your team?"',
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'pay-raise-refusal',
    icon: '\u{1F4B0}',
    iconBg: '#fff7ed',
    title: 'Pay Raise Refusal',
    description: 'Decline a pay raise request while preserving motivation, trust, and retention.',
    badge: { text: 'RETENTION RISK', bg: '#fff7ed', color: '#ea580c' },
    detailTitle: 'Pay Raise Refusal Conversation',
    detailSubtitle: 'Deliver a "no" on compensation while keeping the employee engaged, valued, and clear on their path forward.',
    tabs: [
      {
        label: '\u{1F5FA}\uFE0F Strategy',
        sections: [
          {
            title: '\u{1F4CC} Conversation Structure (A.C.K. Model)',
            type: 'ol',
            items: [
              '<strong>A \u2014 Acknowledge:</strong> Start by validating the ask. "Thank you for raising this. The fact that you\'re advocating for yourself shows confidence, and I respect that."',
              '<strong>C \u2014 Context:</strong> Explain the reason clearly. Be honest about whether it\'s budget, timing, market alignment, or performance-related. "Right now, we\'re not able to approve a raise because [specific reason]."',
              '<strong>K \u2014 Keep the door open:</strong> Outline what needs to happen for a future increase. "Here\'s what I\'d like us to focus on over the next [timeframe] so we can revisit this."',
            ],
          },
          {
            title: '\u{1F3AF} Key Principles',
            type: 'ul',
            items: [
              '<strong>Never say "no" without a "next."</strong> A flat refusal without a path forward feels like a dead end.',
              '<strong>Be specific about the reason.</strong> Vague answers ("it\'s just not possible right now") breed resentment and speculation.',
              '<strong>Separate the person from the budget.</strong> Make it clear if the refusal is about constraints, not their value.',
              '<strong>Don\'t delay the conversation.</strong> Sitting on the request for weeks signals disrespect.',
              '<strong>Prepare alternatives</strong> \u2014 non-monetary compensation (title, flexibility, development budget, extra PTO) can soften the blow.',
            ],
          },
          {
            title: '\u{1F4DD} Sample Script',
            type: 'script',
            text: '"Hi [Name], I wanted to follow up on your compensation request. First, I appreciate you bringing this up \u2014 it tells me you\'re invested in your career here, and I value that. I\'ve reviewed your request carefully and discussed it with [manager/leadership]. At this point, we\'re not able to approve a salary increase, and I want to be transparent about why: [specific reason \u2014 e.g., current budget cycle, market benchmarking, specific performance milestones not yet met]. That said, I don\'t want this to be a dead end. Let\'s talk about what the path to a raise looks like and what we can do in the meantime to support your growth."',
          },
        ],
      },
      {
        label: '\u26A0\uFE0F Risk Analysis',
        sections: [
          {
            title: '\u{1F534} Key Risks',
            type: 'ul',
            items: [
              '<strong>Immediate flight risk:</strong> A refused raise is the #1 trigger for job searching. Assume the employee will look \u2014 make the conversation compelling enough that they stay.',
              '<strong>Quiet quitting:</strong> Even if they don\'t leave, motivation may drop. Watch for disengagement in the weeks following.',
              '<strong>Pay equity exposure:</strong> If the employee discovers peers earn more for similar work, the refusal feels discriminatory. Audit comp data beforehand.',
              '<strong>Damaged trust with manager:</strong> If the manager promised or implied a raise that HR/leadership denied, the employee loses trust in the chain. Align messaging before the conversation.',
              '<strong>Glassdoor/market reputation:</strong> Underpaid employees talk. "They don\'t pay well" becomes a recruiting problem.',
            ],
          },
          {
            title: '\u{1F7E2} Mitigation Strategies',
            type: 'ul',
            items: [
              'Offer a <strong>concrete timeline</strong> for the next review: "Let\'s revisit this in [month] during [cycle]."',
              'Explore <strong>non-monetary alternatives</strong>: one-time bonus, professional development budget, remote work flexibility, additional PTO, title upgrade.',
              'If performance is the gap, tie it to the <strong>PIP or development plan</strong> so it feels actionable, not punitive.',
              'Have the <strong>direct manager reinforce value</strong> in follow-up 1:1s \u2014 the employee needs to feel seen, not just declined.',
              'Document the conversation and <strong>set a calendar reminder</strong> to proactively revisit \u2014 don\'t wait for them to ask again.',
            ],
          },
        ],
      },
      {
        label: '\u{1F9E0} Psychology & Tone',
        sections: [
          {
            title: '\u{1F4A1} Psychological Framework: Equity Theory (Adams)',
            type: 'p',
            text: 'People evaluate fairness by comparing their <strong>input-to-outcome ratio</strong> against others. When an employee asks for a raise, they\'ve already concluded they\'re under-compensated relative to their contribution. A "no" confirms their suspicion and creates <strong>perceived inequity</strong>, which leads to reduced effort, resentment, or exit. Your job is to <strong>rebalance the equation</strong> \u2014 either by showing their perception is incomplete (market data, total comp) or by offering other "outcomes" (growth, flexibility, recognition).',
          },
          {
            title: '\u{1F399}\uFE0F Tone Coaching',
            type: 'ul',
            items: [
              '<strong>Respectful and direct.</strong> Don\'t dance around the "no." Deliver it within the first 2 minutes, then invest the rest of the conversation in the "what next."',
              '<strong>Grateful, not defensive.</strong> Thank them for raising it. An employee who asks is an employee who cares enough to stay \u2014 for now.',
              '<strong>Curious, not dismissive.</strong> Ask what prompted the request. You may learn about market offers, life changes, or feelings of being undervalued that are worth understanding.',
              '<strong>Future-oriented.</strong> Spend 70% of the conversation on the path forward, not 70% justifying the "no."',
              '<strong>Never apologise excessively.</strong> One sincere "I understand this is disappointing" is enough. Over-apologising signals guilt and invites negotiation.',
            ],
          },
          {
            title: '\u{1F6AB} Phrases to Avoid',
            type: 'ul',
            items: [
              '"You should be grateful for what you have." \u2014 Invalidates their perspective entirely.',
              '"Everyone wants a raise." \u2014 Minimises their individual request.',
              '"It\'s out of my hands." \u2014 Abdicates responsibility and feels dishonest.',
              '"Maybe next year." \u2014 Vague and non-committal. Give a real timeline or don\'t promise.',
              '"We can\'t afford it." \u2014 If they see company spending elsewhere, credibility collapses.',
            ],
          },
          {
            title: '\u2705 Phrases That Work',
            type: 'ul',
            items: [
              '"I value that you brought this up \u2014 it shows you\'re invested in your career here."',
              '"I want to be honest with you about where things stand and what we can do about it."',
              '"Let me show you what the path to a compensation change looks like from here."',
              '"I hear you, and I want to make sure you feel valued beyond just the number."',
              '"Can you share what prompted this? I want to make sure I understand the full picture."',
              '"Here\'s what I can offer right now, and here\'s what I\'m committed to advocating for going forward."',
            ],
          },
        ],
      },
      {
        label: '\u2705 Checklist',
        sections: [
          {
            title: '\u{1F4CB} Before the Conversation',
            type: 'ul',
            items: [
              '\u2610 Review the employee\'s current comp vs. market benchmarks',
              '\u2610 Check internal pay equity for similar roles and tenure',
              '\u2610 Understand the specific reason for refusal (budget, performance, timing)',
              '\u2610 Align with the direct manager on messaging and follow-up plan',
              '\u2610 Prepare non-monetary alternatives to offer',
              '\u2610 Review the employee\'s recent performance data and contributions',
              '\u2610 Know the next compensation review cycle date',
            ],
          },
          {
            title: '\u{1F4CB} During the Conversation',
            type: 'ul',
            items: [
              '\u2610 Acknowledge and validate the request',
              '\u2610 Deliver the decision clearly within the first 2 minutes',
              '\u2610 Explain the specific reason',
              '\u2610 Present the path forward with a concrete timeline',
              '\u2610 Offer non-monetary alternatives if available',
              '\u2610 Ask what prompted the request \u2014 listen for underlying concerns',
              '\u2610 Reaffirm their value to the team',
            ],
          },
          {
            title: '\u{1F4CB} After the Conversation',
            type: 'ul',
            items: [
              '\u2610 Send a follow-up email summarising the discussion and next steps',
              '\u2610 Brief the direct manager to reinforce value in upcoming 1:1s',
              '\u2610 Set a calendar reminder for the agreed review date',
              '\u2610 Monitor for signs of disengagement over the next 4\u20136 weeks',
              '\u2610 Document the conversation in the employee\'s HR file',
              '\u2610 Follow through on any promised alternatives or development support',
            ],
          },
        ],
      },
    ],
  },
];
