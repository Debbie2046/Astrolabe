'use client';

import { useState } from 'react';
import { useReadingStore } from '@/stores/readingStore';
import { QuestionType } from '@/types';
import GlassButton from '@/components/common/GlassButton';
import GlassCard from '@/components/common/GlassCard';
import MysticBackground from '@/components/common/MysticBackground';

const questionTypes: { type: QuestionType; icon: string; label: string }[] = [
  { type: 'love', icon: '🔮', label: '爱情' },
  { type: 'career', icon: '💼', label: '事业' },
  { type: 'study', icon: '📚', label: '学业' },
  { type: 'wealth', icon: '💰', label: '财运' },
  { type: 'health', icon: '🏥', label: '健康' },
  { type: 'relationship', icon: '👥', label: '人际' },
];

const exampleQuestions: Record<QuestionType, string[]> = {
  love: ['这段感情会如何发展？', '我们之间的缘分如何？', '我该如何找到真爱？'],
  career: ['我的事业发展方向在哪里？', '这份工作适合我吗？', '如何提升职场运势？'],
  study: ['我的学业该如何提升？', '考试结果如何？', '选择什么专业更合适？'],
  wealth: ['近期财运如何？', '投资需要注意什么？', '如何改善财务状况？'],
  health: ['我的健康状况如何？', '需要注意什么？', '如何改善身心状态？'],
  relationship: ['这段关系该如何发展？', '如何改善人际关系？', '为什么总是遇到同样的问题？'],
};

export default function QuestionPage() {
  const { question, questionType, setQuestion, setQuestionType, setStep } = useReadingStore();
  const [showExamples, setShowExamples] = useState(false);

  const canProceed = question.trim().length > 0 && questionType !== null;

  const handleNext = () => {
    if (canProceed) {
      setStep('spread');
    }
  };

  return (
    <MysticBackground>
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-2xl mx-auto">
          {/* 标题 */}
          <div className="text-center mb-12">
            <p className="text-purple-300/60 mb-4">✧ 第一步 ✧</p>
            <h2 className="text-3xl font-bold text-white mb-2">提出你的疑问</h2>
            <p className="text-purple-200/60">星辰正在倾听你的心声...</p>
          </div>

          {/* 问题类型选择 */}
          <div className="mb-8">
            <label className="text-purple-200/80 text-sm mb-3 block">选择问题类型</label>
            <div className="grid grid-cols-3 gap-3">
              {questionTypes.map(({ type, icon, label }) => (
                <GlassCard
                  key={type}
                  hover
                  className={`p-4 text-center ${
                    questionType === type ? 'ring-2 ring-purple-400/50 bg-purple-500/20' : ''
                  }`}
                  onClick={() => setQuestionType(type)}
                >
                  <span className="text-2xl mb-2 block">{icon}</span>
                  <span className="text-white/80 text-sm">{label}</span>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* 问题输入 */}
          <div className="mb-6">
            <label className="text-purple-200/80 text-sm mb-3 block">说出你的困惑</label>
            <GlassCard className="p-1">
              <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="在这里描述你的问题..."
                className="w-full h-32 bg-transparent text-white placeholder-white/30 resize-none focus:outline-none p-4"
              />
            </GlassCard>
          </div>

          {/* 问题示例 */}
          <div className="mb-8">
            <button
              onClick={() => setShowExamples(!showExamples)}
              className="text-purple-300/60 text-sm hover:text-purple-300 transition-colors"
            >
              {showExamples ? '▼ 隐藏示例' : '▶ 查看好的问题示例'}
            </button>
            {showExamples && questionType && (
              <div className="mt-3 space-y-2">
                {exampleQuestions[questionType].map((q, i) => (
                  <button
                    key={i}
                    onClick={() => setQuestion(q)}
                    className="block w-full text-left p-3 rounded-lg bg-white/5 hover:bg-white/10 text-purple-200/80 text-sm transition-colors"
                  >
                    「{q}」
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 操作按钮 */}
          <div className="flex justify-between">
            <GlassButton variant="ghost" onClick={() => setStep('home')}>
              返回
            </GlassButton>
            <GlassButton onClick={handleNext} disabled={!canProceed}>
              下一步
            </GlassButton>
          </div>
        </div>
      </div>
    </MysticBackground>
  );
}