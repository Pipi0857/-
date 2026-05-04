/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Palmtree, 
  Car, 
  MapPin, 
  Heart, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Sparkles,
  TrainFront,
  Bike,
  Bus,
  Home,
  Utensils,
  Camera,
  ShoppingBag,
  Ticket,
  Wind,
  Coffee,
  Building2,
  Mountain,
  Trees,
  Landmark,
  Ship,
  Plane,
  Cpu,
  CloudRain,
  MountainSnow,
  Sunrise,
  Flower2,
  Compass,
  Wheat,
  Sun,
  Waves,
  Shield,
  Anchor,
  RotateCcw
} from 'lucide-react';
import { STEPS } from './constants';
import { Option } from './types';

function ParticleBurst({ active }: { active: boolean }) {
  if (!active) return null;
  return (
    <div className="absolute inset-0 pointer-events-none z-[60]">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            top: '50%', 
            left: '50%',
            scale: 0,
            x: 0,
            y: 0,
            opacity: 1
          }}
          animate={{ 
            x: (Math.random() - 0.5) * 400,
            y: (Math.random() - 0.5) * 400,
            scale: Math.random() * 1.5 + 0.5,
            opacity: 0
          }}
          transition={{ 
            duration: 0.8,
            ease: "easeOut",
            delay: Math.random() * 0.1
          }}
          className={`absolute w-4 h-4 rounded-full ${
            ['bg-orange-400', 'bg-yellow-400', 'bg-sky-400', 'bg-purple-400', 'bg-green-400'][Math.floor(Math.random() * 5)]
          } shadow-lg`}
        />
      ))}
    </div>
  );
}

function Confetti({ active }: { active: boolean }) {
  if (!active) return null;
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-50">
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            top: -20, 
            left: `${Math.random() * 100}%`,
            rotate: 0,
            scale: Math.random() * 0.7 + 0.3
          }}
          animate={{ 
            top: '110%',
            rotate: 720 * (Math.random() > 0.5 ? 1 : -1),
            x: [0, (Math.random() - 0.5) * 150, 0]
          }}
          transition={{ 
            duration: Math.random() * 3 + 2, 
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "linear"
          }}
          className={`absolute w-4 h-4 ${
            i % 2 === 0 ? 'rounded-full' : 'rounded-sm rotate-45'
          } ${
            ['bg-orange-300', 'bg-orange-200', 'bg-amber-200', 'bg-sky-200', 'bg-indigo-300'][Math.floor(Math.random() * 5)]
          } shadow-sm opacity-60`}
        />
      ))}
    </div>
  );
}

function RandomizingOverlay({ active }: { active: boolean }) {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[110] bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center pointer-events-auto"
        >
          {/* Animated Background Blobs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-200/20 blur-[100px] rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-200/20 blur-[100px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />

          <div className="relative w-80 h-80 flex items-center justify-center">
            {/* Floating Magic Items */}
            {[Palmtree, Car, MapPin, Heart, Sparkles, Utensils, Camera, Ship, Plane, Coffee, Flower2, Bike, Mountain, Waves].map((Icon, idx) => (
              <motion.div
                key={idx}
                animate={{
                  x: [0, (Math.random() - 0.5) * 450],
                  y: [0, (Math.random() - 0.5) * 450],
                  rotate: [0, 720],
                  scale: [0, 1.4, 0],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  delay: idx * 0.12,
                  ease: "easeInOut"
                }}
                className="absolute"
              >
                <Icon className={`w-10 h-10 ${['text-orange-400', 'text-sky-400', 'text-pink-400', 'text-amber-400', 'text-indigo-400', 'text-emerald-400'][idx % 6]}`} />
              </motion.div>
            ))}
            
            {/* Central Magic Compass/Heart */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 0 0px rgba(251, 191, 36, 0)",
                  "0 0 60px rgba(251, 191, 36, 0.5)",
                  "0 0 0px rgba(251, 191, 36, 0)"
                ]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="bg-white p-12 rounded-full shadow-2xl border-8 border-amber-50 z-10 flex items-center justify-center relative"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Compass className="w-28 h-28 text-amber-500/80 stroke-[1.5]" />
              </motion.div>
              <div className="absolute">
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                >
                  <Heart className="w-12 h-12 text-pink-400 fill-pink-300 shadow-sm" />
                </motion.div>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-16 flex flex-col items-center gap-4">
            <motion.div
              animate={{ 
                opacity: [0.5, 1, 0.5],
                y: [0, -4, 0]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-3xl font-serif text-orange-950 italic font-bold tracking-widest flex items-center gap-3"
            >
              <Sparkles className="w-6 h-6 text-amber-400" />
              正在調配驚喜行程
              <Sparkles className="w-6 h-6 text-amber-400" />
            </motion.div>
            <div className="flex gap-3">
              {[0, 1, 2, 3].map(i => (
                <motion.div
                  key={i}
                  animate={{ 
                    scale: [1, 1.6, 1], 
                    opacity: [0.2, 1, 0.2],
                    backgroundColor: ['#fbbf24', '#f59e0b', '#fbbf24']
                  }}
                  transition={{ 
                    duration: 0.8, 
                    repeat: Infinity, 
                    delay: i * 0.15 
                  }}
                  className="w-3.5 h-3.5 rounded-full shadow-sm"
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  const [view, setView] = useState<'home' | 'hub' | 'step' | 'revealing' | 'result'>('home');
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<number, string[]>>({});
  const [subSelections, setSubSelections] = useState<Record<string, string[]>>({});
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [winners, setWinners] = useState<Record<number, string>>({});
  const [finalRecommendations, setFinalRecommendations] = useState<Record<number, string>>({});
  const [isRevealing, setIsRevealing] = useState(false);
  const revealTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [isFinished, setIsFinished] = useState(false);
  const [conflictWarning, setConflictWarning] = useState<string | null>(null);
  const [isRandomSelected, setIsRandomSelected] = useState(false);
  const [isRandomizing, setIsRandomizing] = useState(false);

  // Get current selections for current step
  const currentSelections = selections[currentStep] || [];

  const destinationHighlights = useMemo(() => {
    const destWinnerId = winners[0];
    if (!destWinnerId) return null;
    
    // For destination winners, subSelections[destWinnerId] is now an array of strings (ID)
    // But winners[0] should have a single sub-result picked from the array
    // Wait, the result picked by handleReveal will be stored as a single string ID in subSelections?
    // No, I should probably store the final winner area ID somewhere, or just pick one randomly from subSelections array during reveal.
    
    // Let's look at how winners are stored.
    // winners[0] is the parent destination ID.
    // I need a single winning sub-area to determine highlights.
    // I'll pick one from subSelections during reveal and perhaps store it differently or use it here.
    
    // Actually, I'll store the 'winning' subAreaId alongside winners or picking from what's in subSelections if it's already "revealed".
    // Let's define winners to be more specific or handle it in useMemo.
    
    // Re-evaluating: When revealing happens, we pick ONE subArea from the selections.
    // I should store this pick.
    const winningSubAreaId = subSelections[`winner_sub_${destWinnerId}`]?.[0];
    if (!winningSubAreaId) return null;

    const destOption = STEPS[0].options.find(o => o.id === destWinnerId);
    const destArea = destOption?.subOptions?.find(so => so.id === winningSubAreaId);
    
    return destArea?.activityHighlights || null;
  }, [winners, subSelections]);

  const handleToggleOption = (optionId: string) => {
    if (view !== 'step') return;
    
    const stepSelections = selections[currentStep] || [];
    
    if (stepSelections.includes(optionId)) {
      // Deselect
      setSelections(prev => ({
        ...prev,
        [currentStep]: stepSelections.filter(id => id !== optionId)
      }));
      
      // Cleanup sub-selection
      setSubSelections(subPrev => {
        const next = { ...subPrev };
        delete next[optionId];
        delete next[`winner_sub_${optionId}`];
        return next;
      });
    } else if (stepSelections.length < 2) {
      // Select
      setSelections(prev => ({
        ...prev,
        [currentStep]: [...stepSelections, optionId]
      }));
      
      // Open sub-menu for destination or activity step
      if (currentStep === 0 || currentStep === 2) {
        setActiveSubMenu(optionId);
      }
    }
  };

  const handleSubSelect = (parentId: string, subId: string) => {
    // Stage 0 (Location) is multi-select, others (Step 2 activities) are single select
    if (currentStep === 0) {
      setSubSelections(prev => {
        const current = prev[parentId] || [];
        const next = current.includes(subId) 
          ? current.filter(id => id !== subId) 
          : [...current, subId];
        return { ...prev, [parentId]: next };
      });
    } else {
      setSubSelections(prev => ({ ...prev, [parentId]: [subId] }));
      setActiveSubMenu(null);
    }
  };

  const handleReveal = () => {
    if (currentSelections.length === 2) {
      // Clear any existing timer to avoid race conditions
      if (revealTimerRef.current) {
        clearTimeout(revealTimerRef.current);
        revealTimerRef.current = null;
      }

      setView('revealing');
      setIsRevealing(true);

      const randomIdx = Math.floor(Math.random() * 2);
      const winnerId = currentSelections[randomIdx];
      
      // If it's the first step (Location), pick a random sub-option from pre-selected ones
      if (currentStep === 0) {
        const selectedSubs = subSelections[winnerId] || [];
        const winnerOption = STEPS[0].options.find(o => o.id === winnerId);
        
        let winningSubId = '';
        if (selectedSubs.length > 0) {
          winningSubId = selectedSubs[Math.floor(Math.random() * selectedSubs.length)];
        } else if (winnerOption?.subOptions && winnerOption.subOptions.length > 0) {
          const randomSubIdx = Math.floor(Math.random() * winnerOption.subOptions.length);
          winningSubId = winnerOption.subOptions[randomSubIdx].id;
        }
        
        if (winningSubId) {
          setSubSelections(prev => ({ ...prev, [`winner_sub_${winnerId}`]: [winningSubId] }));
        }
      }

      // If it's the activity step, and a sub-option was selected, pick a random recommendation from it
      if (currentStep === 2) {
        const winnerOption = STEPS[2].options.find(o => o.id === winnerId);
        const subIdArr = subSelections[winnerId];
        const subId = subIdArr?.[0]; // Activity is single select (via handleSubSelect override)
        const subOption = winnerOption?.subOptions?.find(so => so.id === subId);
        
        let recommendation = '';
        
        // Try to get a recommendation based on the destination area
        const destinationWinnerId = winners[0];
        if (destinationWinnerId) {
          const destAreaId = subSelections[`winner_sub_${destinationWinnerId}`]?.[0];
          const destOption = STEPS[0].options.find(o => o.id === destinationWinnerId);
          const destArea = destOption?.subOptions?.find(so => so.id === destAreaId);
          
          if (destArea?.activityHighlights && destArea.activityHighlights[subId]) {
            recommendation = destArea.activityHighlights[subId];
          } else if (destArea) {
            // Fallback: If no specific highlight found but we have a destination, 
            // pick a generic one and prefix it with the area for consistency
            if (subOption?.recommendations && subOption.recommendations.length > 0) {
              const randomRecIdx = Math.floor(Math.random() * subOption.recommendations.length);
              recommendation = `${destArea.name}附近的 ${subOption.recommendations[randomRecIdx]}`;
            }
          }
        }
        
        // Final fallback to random recommendation
        if (!recommendation && subOption?.recommendations && subOption.recommendations.length > 0) {
          const randomRecIdx = Math.floor(Math.random() * subOption.recommendations.length);
          recommendation = subOption.recommendations[randomRecIdx];
        }
        
        if (recommendation) {
          setFinalRecommendations(prev => ({ ...prev, [currentStep]: recommendation }));
        }
      }

      // Delay setting winner to allow for animation
      revealTimerRef.current = setTimeout(() => {
        setWinners(prev => {
          const next = { ...prev, [currentStep]: winnerId };
          // If destination was revealed, clear activity result to avoid conflict
          if (currentStep === 0) {
            delete next[2];
          }
          return next;
        });

        // Clear activity selections and recommendations if destination changes
        if (currentStep === 0) {
          setSelections(prev => {
            const next = { ...prev };
            delete next[2];
            return next;
          });
          
          setSubSelections(prev => {
            const next = { ...prev };
            // Clear all sub-selections for activity categories (Step 2 options)
            STEPS[2].options.forEach(opt => {
              delete next[opt.id];
            });
            return next;
          });

          setFinalRecommendations(prev => {
            const next = { ...prev };
            delete next[2];
            return next;
          });
        }

        setIsRevealing(false);
        revealTimerRef.current = null;
      }, 2000);
    }
  };

  const handleNext = () => {
    setView('hub');
  };

  const handleBack = () => {
    if (view === 'revealing') {
      if (revealTimerRef.current) {
        clearTimeout(revealTimerRef.current);
        revealTimerRef.current = null;
      }
      setIsRevealing(false);
      setWinners(prev => {
        const newWinners = { ...prev };
        delete newWinners[currentStep];
        return newWinners;
      });
      setView('step');
      return;
    }

    if (view === 'step' || view === 'result' || view === 'hub') {
      setView('hub');
    }
  };

  const startJourney = () => {
    setView('hub');
  };

  const enterStep = (stepIdx: number) => {
    if (stepIdx === 0 && winners[2]) {
      setConflictWarning("由於目前的「去哪裡玩」已有結果，重新選擇「目的地」將會重製該活動結果。建議先決定目的地再決定活動唷！");
    }
    setCurrentStep(stepIdx);
    setView('step');
  };

  const clearStep2Data = () => {
    setWinners(prev => {
      const next = { ...prev };
      delete next[2];
      return next;
    });
    setSelections(prev => {
      const next = { ...prev };
      delete next[2];
      return next;
    });
    setSubSelections(prev => {
      const next = { ...prev };
      STEPS[2].options.forEach(opt => delete next[opt.id]);
      return next;
    });
    setFinalRecommendations(prev => {
      const next = { ...prev };
      delete next[2];
      return next;
    });
    setConflictWarning(null);
  };

  const filteredOptions = useMemo(() => {
    if (currentStep !== 2 || !destinationHighlights) return STEPS[currentStep].options;
    
    return STEPS[currentStep].options.filter(option => 
      option.subOptions?.some(sub => !!destinationHighlights[sub.id])
    );
  }, [currentStep, destinationHighlights]);

  const showFinalResult = () => {
    setView('result');
  };

  const handleRandomChoice = () => {
    setIsRandomizing(true);
    
    // Artificial delay for the cute animation
    setTimeout(() => {
      // 1. Pick random destination
      const destStep = STEPS[0];
      const randomDest = destStep.options[Math.floor(Math.random() * destStep.options.length)];
      const randomSubDest = randomDest.subOptions?.[Math.floor(Math.random() * (randomDest.subOptions?.length || 0))];
      
      // 2. Pick random transport
      const transStep = STEPS[1];
      const randomTrans = transStep.options[Math.floor(Math.random() * transStep.options.length)];
      
      // 3. Pick random activity (must be compatible)
      const highlights = randomSubDest?.activityHighlights || null;
      let compatibleActivities = STEPS[2].options;
      if (highlights) {
        compatibleActivities = STEPS[2].options.filter(opt => 
          opt.subOptions?.some(sub => !!highlights[sub.id])
        );
      }
      
      if (compatibleActivities.length === 0) compatibleActivities = STEPS[2].options;
      const randomAct = compatibleActivities[Math.floor(Math.random() * compatibleActivities.length)];
      
      // Pick sub-activity
      let compatibleSubActivities = randomAct.subOptions || [];
      if (highlights) {
        compatibleSubActivities = (randomAct.subOptions || []).filter(sub => !!highlights[sub.id]);
      }
      if (compatibleSubActivities.length === 0) compatibleSubActivities = randomAct.subOptions || [];
      const randomSubAct = compatibleSubActivities[Math.floor(Math.random() * compatibleSubActivities.length)];

      // Result compilation
      setWinners({
        0: randomDest.id,
        1: randomTrans.id,
        2: randomAct.id
      });
      setSubSelections({
        [randomDest.id]: [randomSubDest?.id || ''],
        [`winner_sub_${randomDest.id}`]: [randomSubDest?.id || ''],
        [randomAct.id]: [randomSubAct?.id || '']
      });

      // Calculate recommendation
      let recommendation = '';
      if (highlights && randomSubAct && highlights[randomSubAct.id]) {
        recommendation = highlights[randomSubAct.id];
      } else if (randomSubDest && randomSubAct && randomSubAct.recommendations && randomSubAct.recommendations.length > 0) {
        const randomRecIdx = Math.floor(Math.random() * randomSubAct.recommendations.length);
        recommendation = `${randomSubDest.name}附近的 ${randomSubAct.recommendations[randomRecIdx]}`;
      }

      if (recommendation) {
        setFinalRecommendations({ 2: recommendation });
      } else {
        setFinalRecommendations({});
      }

      setIsRandomSelected(true);
      setIsRandomizing(false);
      setView('result');
    }, 2000);
  };

  const reset = () => {
    setSelections({});
    setSubSelections({});
    setWinners({});
    setFinalRecommendations({});
    setCurrentStep(0);
    setView('hub');
    setIsRevealing(false);
    setIsFinished(false);
    setActiveSubMenu(null);
    setIsRandomSelected(false);
  };

  const handleExportItinerary = () => {
    const dest = winners[0] ? STEPS[0].options.find(o => o.id === winners[0]) : null;
    const destAreaId = subSelections[`winner_sub_${winners[0]}`]?.[0];
    const destArea = dest?.subOptions?.find(so => so.id === destAreaId);
    
    const transport = winners[1] ? STEPS[1].options.find(o => o.id === winners[1]) : null;
    
    const activity = winners[2] ? STEPS[2].options.find(o => o.id === winners[2]) : null;
    const activitySubId = subSelections[2]?.[0];
    const activitySub = activity?.subOptions?.find(so => so.id === activitySubId);
    
    const recommendation = finalRecommendations[2];

    const content = `
💖 我們的專屬浪漫小旅行 💖

📍 目的地：${dest?.name || '未定'} - ${destArea?.name || ''}
🚗 交通方式：${transport?.name || '未定'}
✨ 景點類型：${activity?.name || '未定'} (${activitySub?.name || ''})

🌟 特別推薦行程：
「${recommendation || '驚喜策劃中'}」

希望這趟旅程能成為你們最美好的回憶！✨
Generated by 情侶小旅行二選一
    `.trim();

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `我們的浪漫小旅行-${dest?.name || ''}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const stepData = STEPS[currentStep];

  const getOptionIcon = (id: string) => {
    switch(id) {
      // Step 1: Locations
      case 'tpe': return <Building2 className="w-8 h-8" />;
      case 'ntpc': return <Mountain className="w-8 h-8" />;
      case 'tcn': return <Trees className="w-8 h-8" />;
      case 'tnn': return <Landmark className="w-8 h-8" />;
      case 'khh': return <Ship className="w-8 h-8" />;
      case 'thb': return <Plane className="w-8 h-8" />;
      case 'hcz': return <Cpu className="w-8 h-8" />;
      case 'yla': return <CloudRain className="w-8 h-8" />;
      case 'hun': return <MountainSnow className="w-8 h-8" />;
      case 'ttn': return <Sunrise className="w-8 h-8" />;
      case 'mla': return <Flower2 className="w-8 h-8" />;
      case 'cha': return <Compass className="w-8 h-8" />;
      case 'nto': return <Mountain className="w-8 h-8" />;
      case 'yln': return <Wheat className="w-8 h-8" />;
      case 'cyi': return <TrainFront className="w-8 h-8" />;
      case 'ptn': return <Sun className="w-8 h-8" />;
      case 'phu': return <Waves className="w-8 h-8" />;
      case 'kmn': return <Shield className="w-8 h-8" />;
      case 'mzu': return <Anchor className="w-8 h-8" />;
      case 'klu': return <Anchor className="w-8 h-8" />;

      // Step 2: Transport
      case 'scooter': return <Bike className="w-8 h-8" />;
      case 'car': return <Car className="w-8 h-8" />;
      case 'bus': return <Bus className="w-8 h-8" />;
      case 'train': return <TrainFront className="w-8 h-8" />;

      // Step 3: Merged Activities
      case 'spots': return <Camera className="w-8 h-8" />;
      case 'food': return <Utensils className="w-8 h-8" />;
      case 'nature': return <Wind className="w-8 h-8" />;
      case 'outdoor': return <Sparkles className="w-8 h-8" />;
      case 'indoor': return <Coffee className="w-8 h-8" />;
      case 'art': return <Ticket className="w-8 h-8" />;
      case 'shopping': return <ShoppingBag className="w-8 h-8" />;
      
      default: return <MapPin className="w-7 h-7" />;
    }
  };

  // Home Page
  if (view === 'home') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#FFF5F7] via-[#FFF9F2] to-[#F5F3FF] flex flex-col items-center justify-center p-6 text-[#4A4540] overflow-hidden relative">
        <RandomizingOverlay active={isRandomizing} />
        {/* Cute background blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-200/20 blur-[80px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-200/20 blur-[100px] rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-yellow-100/30 blur-[60px] rounded-full" />

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full text-center relative z-10"
        >
          <div className="relative mb-12">
            <motion.div 
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="w-48 h-64 bg-amber-50 rounded-[2rem] mx-auto shadow-2xl flex items-center justify-center border-4 border-white"
            >
              <Heart className="w-20 h-20 text-amber-300 fill-amber-100" />
            </motion.div>
            <div className="absolute -bottom-4 -right-4 w-24 h-32 bg-amber-100 rounded-2xl -rotate-12 -z-10 border-4 border-white shadow-lg" />
            <div className="absolute -bottom-2 -left-4 w-24 h-32 bg-orange-50 rounded-2xl rotate-6 -z-20 border-4 border-white shadow-md" />
          </div>

          <h1 className="text-4xl font-serif font-medium mb-4 tracking-tight">情侶小旅行</h1>
          <p className="text-amber-600/70 mb-12 font-medium">「今天，我們去哪裡創造回憶？」</p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={startJourney}
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-[#5D4037] text-white rounded-full font-medium overflow-hidden shadow-xl"
            id="start-journey-button"
          >
            <span className="relative z-10 text-lg">出去玩！開始選擇</span>
            <Sparkles className="w-5 h-5 text-amber-300 animate-pulse" />
            <motion.div 
              className="absolute inset-0 bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </motion.button>
        </motion.div>
      </div>
    );
  }

  // Result Page
  if (view === 'result') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#FFF5F7] to-[#FFF9F2] text-[#4A4540] flex flex-col items-center font-sans overflow-x-hidden relative">
        <RandomizingOverlay active={isRandomizing} />
        <header className="w-full p-6 flex flex-col items-center sticky top-0 bg-white/60 backdrop-blur-lg z-50 border-b border-amber-50">
          <div className="w-full flex items-center justify-between">
            <button onClick={handleBack} className="p-3 bg-white rounded-full text-amber-400 hover:text-orange-400 transition-colors shadow-sm">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div className="flex flex-col items-center">
              <span className="font-serif italic text-xl tracking-tight text-orange-950">行程總覽</span>
            </div>
            <div className="p-3">
              <Heart className="w-6 h-6 text-amber-300 fill-amber-50" />
            </div>
          </div>
          {isRandomSelected && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              className="mt-4 px-4 py-1.5 bg-amber-100 text-amber-800 rounded-full text-xs font-bold border border-amber-200 flex items-center gap-2"
            >
              <Sparkles className="w-3 h-3" />
              <span>已為你隨機選擇</span>
              <Sparkles className="w-3 h-3" />
            </motion.div>
          )}
        </header>

        <div className="max-w-2xl w-full relative z-10 px-6 py-12">
          <div className="text-center mb-12">
            <motion.div
              animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="inline-block p-6 bg-white border-4 border-amber-100 rounded-full mb-6 shadow-xl shadow-amber-100/50"
            >
              <Heart className="w-12 h-12 text-amber-500 fill-amber-200" />
            </motion.div>
            <h1 className="text-3xl md:text-4xl font-serif font-medium mb-4 tracking-tight">我們的天選旅程提案</h1>
            <p className="text-orange-800/60 font-light">這就是我們今天的幸福指南...</p>
          </div>

          <div className="space-y-6">
            {STEPS.map((step, idx) => {
              const winnerId = winners[idx];
              const winner = step.options.find(o => o.id === winnerId);
              const subWinnerId = subSelections[idx === 0 ? `winner_sub_${winnerId || ''}` : (winnerId || '')]?.[0];
              const subWinner = winner?.subOptions?.find(so => so.id === subWinnerId);

              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-6 rounded-3xl border-2 border-amber-100 shadow-xl flex items-center gap-6"
                >
                  <div className="p-4 bg-orange-50 rounded-2xl text-orange-400 shadow-inner">
                    {getOptionIcon(winnerId || '')}
                  </div>
                  <div>
                    <h3 className="text-[10px] uppercase tracking-[0.2em] text-orange-600/50 font-semibold mb-1">{step.title}</h3>
                    <div className="text-2xl font-serif text-orange-950 leading-tight">
                      {winner?.name}
                    </div>
                    {subWinner && (
                      <div className="text-sm text-amber-500 font-medium mt-1">
                        {idx === 0 ? `隨機區域：${subWinner.name}` : `特別推薦：${subWinner.name}`}
                      </div>
                    )}
                    {finalRecommendations[idx] && (
                      <div className="text-xs text-amber-800/70 mt-1.5 italic font-serif opacity-70">
                        「{finalRecommendations[idx]}」
                      </div>
                    )}
                  </div>
                  <div className="ml-auto">
                    <Sparkles className="w-5 h-5 text-amber-200" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-12 flex flex-col gap-4">
            <button 
              onClick={handleExportItinerary}
              className="w-full py-5 bg-white border-2 border-amber-200 text-amber-700 rounded-3xl font-medium hover:bg-amber-50 transition-colors shadow-lg shadow-amber-100/50 flex items-center justify-center gap-2"
              id="export-button"
            >
              <Ticket className="w-5 h-5" />
              匯出行程清單
            </button>
            <button 
              onClick={reset}
              className="w-full py-5 bg-[#5D4037] text-white rounded-3xl font-medium hover:bg-orange-950 transition-colors shadow-lg shadow-amber-200/20 flex items-center justify-center gap-2"
              id="restart-button"
            >
              <RotateCcw className="w-5 h-5" />
              重新規劃另一場約會
            </button>
            <p className="text-center text-xs text-amber-600/40">願每一段旅程，都能看見最美的風景。</p>
          </div>
        </div>
      </div>
    );
  }

  // Reveal Animation View
  if (view === 'revealing') {
    const winnerId = winners[currentStep];
    const option1 = currentSelections[0] ? STEPS[currentStep].options.find(o => o.id === currentSelections[0]) : null;
    const option2 = currentSelections[1] ? STEPS[currentStep].options.find(o => o.id === currentSelections[1]) : null;

    return (
      <div className="min-h-screen bg-gradient-to-tr from-[#FFF9F2] via-[#FFF5F7] to-[#F5F3FF] text-[#4A4540] flex flex-col items-center justify-center p-6 relative overflow-hidden">
        {/* Decorative elements for Q-style */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-200/10 rounded-full blur-[80px] pointer-events-none" />
        
        <header className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between z-10">
          <button onClick={handleBack} className="p-3 bg-white/50 backdrop-blur-sm rounded-full text-amber-400 hover:text-orange-400 transition-colors shadow-sm">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <span className="font-serif text-lg tracking-wide text-orange-800 opacity-60 font-medium">{STEPS[currentStep].title} • 正在為你們挑選中</span>
          <div className="w-10" />
        </header>

        <div className="w-full max-w-sm flex flex-col items-center perspective-1000">
          <AnimatePresence mode="wait">
            {isRevealing || !winnerId ? (
              <motion.div
                key="flipping-card"
                initial={{ opacity: 0, scale: 0.8, rotateY: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  rotateY: [0, 180, 360, 540, 720, 900, 1080],
                }}
                exit={{ opacity: 0, scale: 1.1, transition: { duration: 0.2 } }}
                transition={{ 
                  duration: 2,
                  ease: "easeInOut",
                  rotateY: { duration: 2, ease: "linear" }
                }}
                className="relative w-64 h-80 preserve-3d"
              >
                {/* Front of the flipping card */}
                <div className="absolute inset-0 backface-hidden bg-white rounded-[2.5rem] border-4 border-amber-100 shadow-2xl flex flex-col items-center justify-center p-8 overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#f59e0b 1px, transparent 1px)', backgroundSize: '15px 15px' }} />
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 2, 
                      ease: "easeInOut",
                      type: "tween"
                    }}
                    className="mb-6 p-6 bg-amber-50 text-amber-500 rounded-full"
                  >
                    {getOptionIcon(currentSelections[0])}
                  </motion.div>
                  <span className="text-2xl font-serif text-orange-950 opacity-80">{option1?.name}</span>
                </div>

                {/* Back of the flipping card */}
                <div className="absolute inset-0 backface-hidden bg-white rounded-[2.5rem] border-4 border-amber-100 shadow-2xl flex flex-col items-center justify-center p-8 rotate-y-180 overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#f59e0b 1px, transparent 1px)', backgroundSize: '15px 15px' }} />
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 2, 
                      ease: "easeInOut", 
                      delay: 0.75,
                      type: "tween"
                    }}
                    className="mb-6 p-6 bg-amber-50 text-amber-500 rounded-full"
                  >
                    {getOptionIcon(currentSelections[1])}
                  </motion.div>
                  <span className="text-2xl font-serif text-orange-950 opacity-80">{option2?.name}</span>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="winner-reveal"
                initial={{ opacity: 0, scale: 0.5, rotate: -20, rotateY: -180 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  rotate: 0, 
                  rotateY: 0,
                  y: [0, -10, 0] 
                }}
                transition={{ 
                  y: {
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut"
                  },
                  opacity: { type: "spring", stiffness: 260, damping: 20 },
                  scale: { type: "spring", stiffness: 260, damping: 20 },
                  rotate: { type: "spring", stiffness: 260, damping: 20 },
                  rotateY: { type: "spring", stiffness: 260, damping: 20 }
                }}
                className="flex flex-col items-center text-center w-full"
              >
                <div className="relative mb-12">
                  <div className="absolute inset-0 bg-amber-400/20 blur-[60px] rounded-full scale-150 animate-pulse" />
                  <motion.div 
                    whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                    className="relative w-64 h-80 bg-white rounded-[2.5rem] border-4 border-amber-300 shadow-2xl flex flex-col items-center justify-center p-8 overflow-hidden preserve-3d"
                  >
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white border-4 border-white shadow-lg rotate-12">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    
                    <div className="mb-6 p-6 bg-amber-50 text-amber-500 rounded-full shadow-inner">
                      {getOptionIcon(winnerId)}
                    </div>
                    <div className="text-orange-400 text-xs uppercase tracking-[0.2em] mb-2 font-bold">今天的幸福選擇</div>
                    <h2 className="text-4xl font-serif text-orange-950 tracking-tight">
                      {STEPS[currentStep].options.find(o => o.id === winnerId)?.name}
                    </h2>
                  </motion.div>
                </div>

                <AnimatePresence>
                  {(() => {
                    const subIdKey = currentStep === 0 ? `winner_sub_${winnerId}` : winnerId;
                    const subId = subSelections[subIdKey]?.[0];
                    if (!subId) return null;

                    const winnerOption = STEPS[currentStep].options.find(o => o.id === winnerId);
                    const subOption = winnerOption?.subOptions?.find(so => so.id === subId);

                    return (
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          type: "spring",
                          delay: 0.3,
                          bounce: 0.5
                        }}
                        className="bg-white/90 backdrop-blur-md px-10 py-6 rounded-[2.5rem] shadow-xl shadow-amber-200/40 border-2 border-amber-50 mb-10 w-full"
                      >
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <div className="h-[2px] w-4 bg-amber-200" />
                          <p className="text-xs text-amber-500 uppercase tracking-widest font-bold">
                            {currentStep === 0 ? "隨機推薦區域" : "特別推薦提案"}
                          </p>
                          <div className="h-[2px] w-4 bg-amber-200" />
                        </div>
                        <p className="text-3xl font-serif text-orange-900 leading-tight">
                          {subOption?.name}
                        </p>
                        {finalRecommendations[currentStep] && (
                          <p className="text-base text-orange-800/60 mt-3 font-serif italic bg-amber-50/50 py-2 px-4 rounded-xl">
                            「{finalRecommendations[currentStep]}」
                          </p>
                        )}
                      </motion.div>
                    );
                  })()}
                </AnimatePresence>

                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ scale: 1.05, backgroundColor: '#f59e0b' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNext}
                  className="px-12 py-5 bg-amber-500 text-white rounded-full font-bold shadow-xl shadow-amber-200 flex items-center gap-3 transition-all"
                >
                  <span className="text-lg">返回大廳繼續規劃</span>
                  <ArrowRight className="w-6 h-6" />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <ParticleBurst active={!isRevealing && !!winnerId} />
        <Confetti active={!isRevealing && !!winnerId} />
      </div>
    );
  }

  // Step Selection Hub
  if (view === 'hub') {
    const allStepsCompleted = [0, 1, 2].every(idx => winners[idx]);

    return (
      <div className="min-h-screen bg-gradient-to-br from-[#FFF5F7] via-[#FFF9F2] to-[#F1F5F9] flex flex-col items-center p-6 text-[#4A4540]">
        <RandomizingOverlay active={isRandomizing} />
        <header className="w-full max-w-lg mb-12 flex items-center justify-between">
          <button onClick={() => setView('home')} className="p-3 bg-white rounded-full text-amber-400 hover:text-orange-400 transition-colors shadow-sm">
            <Home className="w-6 h-6" />
          </button>
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-serif text-orange-950 tracking-tight">打造完美約會</h2>
            <div className="text-[10px] text-orange-600/50 uppercase tracking-widest mt-1">選一個最心動的環節開始</div>
          </div>
          <div className="w-12 h-12 flex items-center justify-center">
            <Heart className="w-6 h-6 text-amber-300 fill-amber-50" />
          </div>
        </header>

        <div className="grid grid-cols-1 w-full max-w-md gap-4">
          {STEPS.map((step, idx) => {
            const isCompleted = winners[idx];
            return (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => enterStep(idx)}
                className={`
                  relative p-8 rounded-[2.5rem] text-left transition-all overflow-hidden flex items-center gap-6
                  ${isCompleted 
                    ? 'bg-white border-2 border-amber-100 shadow-xl shadow-amber-50' 
                    : 'bg-[#FFFDF9] border-2 border-amber-50/50 shadow-lg shadow-orange-50/20'
                  }
                `}
              >
                <div className={`p-5 rounded-2xl ${isCompleted ? 'bg-amber-50 text-amber-500' : 'bg-amber-50 text-amber-300'}`}>
                  {idx === 0 ? <MapPin className="w-8 h-8" /> : (idx === 1 ? <Car className="w-8 h-8" /> : <Sparkles className="w-8 h-8" />)}
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-orange-950 opacity-80">{step.title}</h3>
                  <p className="text-xs text-amber-600/50 mt-1">
                    {isCompleted 
                      ? `${STEPS[idx].options.find(o => o.id === winners[idx])?.name}${subSelections[idx === 0 ? `winner_sub_${winners[idx]}` : winners[idx]] ? ` (${STEPS[idx].options.find(o => o.id === winners[idx])?.subOptions?.find(so => so.id === (subSelections[idx === 0 ? `winner_sub_${winners[idx]}` : winners[idx]]?.[0]))?.name})` : ''}`
                      : step.subtitle}
                  </p>
                </div>
                {isCompleted && (
                  <div className="ml-auto bg-amber-500 text-white p-1.5 rounded-full">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                )}
              </motion.button>
            );
          })}
        </div>

        {allStepsCompleted && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 w-full max-w-md"
          >
            <button
              onClick={showFinalResult}
              className="w-full py-5 bg-gradient-to-r from-amber-400 to-amber-500 text-white rounded-[2rem] font-bold text-lg shadow-xl shadow-amber-200 flex items-center justify-center gap-3"
            >
              <Sparkles className="w-6 h-6" />
              <span>揭曉天選旅程</span>
              <Sparkles className="w-6 h-6" />
            </button>
          </motion.div>
        )}

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 w-full max-w-md"
        >
          <button
            onClick={handleRandomChoice}
            className="w-full py-5 bg-white border-2 border-amber-200 text-amber-600 rounded-[2rem] font-bold text-lg shadow-lg hover:bg-amber-50 transition-colors flex items-center justify-center gap-3"
            id="random-choice-button"
          >
            <RotateCcw className="w-5 h-5 animate-spin-slow" />
            <span>隨機選擇</span>
          </button>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileTap={{ scale: 0.95 }}
          onClick={reset}
          className="mt-8 flex items-center gap-2 text-amber-500/70 hover:text-orange-500 transition-colors font-medium text-sm py-2 px-4 rounded-full hover:bg-orange-50"
          id="reset-all-button"
        >
          <RotateCcw className="w-4 h-4" />
          <span>重新選擇</span>
        </motion.button>
      </div>
    );
  }

  // Selection Page (Card Style)
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF9F2] to-[#FFF5F7] text-[#4A4540] font-sans selection:bg-amber-100 selection:text-orange-900 pb-32">
      <RandomizingOverlay active={isRandomizing} />
      <AnimatePresence>
        {conflictWarning && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-orange-950/40 backdrop-blur-sm"
            onClick={() => setConflictWarning(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white rounded-[2rem] p-8 max-w-sm w-full shadow-2xl text-center"
              onClick={e => e.stopPropagation()}
            >
          <div className="w-16 h-16 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-serif text-orange-950 mb-4">小叮嚀</h3>
          <p className="text-amber-800/60 leading-relaxed mb-8">
            {conflictWarning}
          </p>
              <button 
                onClick={clearStep2Data}
                className="w-full py-4 bg-amber-500 text-white rounded-full font-bold shadow-lg shadow-amber-200 hover:bg-orange-600 transition-colors"
                id="close-warning-button"
              >
                我知道了
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <header className="p-6 flex items-center justify-between sticky top-0 bg-white/60 backdrop-blur-lg z-50 border-b border-amber-50">
        <button onClick={handleBack} className="p-3 bg-white rounded-full text-amber-400 hover:text-orange-400 transition-colors shadow-sm">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="flex flex-col items-center">
          <span className="font-serif italic text-xl tracking-tight text-orange-950">{STEPS[currentStep].title}</span>
          <div className="flex gap-1.5 mt-1.5">
            {STEPS.map((_, idx) => (
              <div key={idx} className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentStep ? 'w-6 bg-amber-400' : (idx < currentStep ? 'w-2 bg-amber-200' : 'w-2 bg-amber-100')}`} />
            ))}
          </div>
        </div>
        <div className="p-3">
          <Heart className="w-6 h-6 text-amber-300 fill-amber-50" />
        </div>
      </header>


      <main className="max-w-5xl mx-auto px-6 pt-8 pb-32">
        <div className="text-center mb-10 text-amber-600/70">
          <p className="text-base font-medium">{STEPS[currentStep].subtitle}</p>
          <p className="text-[10px] mt-1 tracking-widest uppercase">請翻開兩張心動卡片</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filteredOptions.map((option, index) => {
            const isSelected = currentSelections.includes(option.id);
            const isMaxed = currentSelections.length >= 2 && !isSelected;

            return (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <motion.button
                  whileHover={!isMaxed ? { y: -10, rotate: isSelected ? 0 : index % 2 === 0 ? 2 : -2 } : {}}
                  whileTap={!isMaxed ? { scale: 0.95 } : {}}
                  onClick={() => handleToggleOption(option.id)}
                  disabled={isMaxed}
                  className={`
                    group relative w-full aspect-[3/4] rounded-[2rem] transition-all duration-500
                    flex flex-col items-center justify-center text-center p-4 overflow-hidden border-4
                    ${isSelected 
                      ? 'bg-amber-400 border-amber-300 shadow-2xl shadow-amber-200/50 z-10' 
                      : isMaxed 
                        ? 'bg-amber-50/20 border-transparent opacity-30 grayscale blur-[1px]' 
                        : 'bg-[#FFFDF9] border-[#FFFDF9] shadow-xl shadow-amber-100/30 hover:shadow-orange-100'
                    }
                  `}
                  id={`card-${option.id}`}
                >
                  {/* Card Background Pattern */}
                  <div className={`absolute inset-0 opacity-[0.03] transition-opacity ${isSelected ? 'opacity-[0.08]' : ''}`}>
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#f97316 0.5px, transparent 0.5px)', backgroundSize: '10px 10px' }} />
                  </div>

                  <motion.div 
                    animate={isSelected ? { scale: [1, 1.2, 1] } : {}}
                    className={`mb-6 p-4 rounded-full transition-colors ${isSelected ? 'bg-white/20 text-white' : 'bg-amber-50 text-amber-300'}`}
                  >
                    {getOptionIcon(option.id)}
                  </motion.div>

                  <h3 className={`text-xl font-serif mb-2 transition-colors ${isSelected ? 'text-white' : 'text-orange-950 opacity-80'}`}>
                    {option.name}
                  </h3>
                  
                  {isSelected && currentStep === 2 && subSelections[option.id]?.[0] && (
                    <div className="bg-white/20 text-white text-[10px] px-2 py-1 rounded-full mb-2 font-medium">
                      推薦：{option.subOptions?.find(so => so.id === subSelections[option.id][0])?.name}
                    </div>
                  )}

                  {isSelected && currentStep === 0 && subSelections[option.id]?.length > 0 && (
                    <div className="bg-white/20 text-white text-[10px] px-2 py-1 rounded-full mb-2 font-medium">
                      已選 {subSelections[option.id].length} 個區域
                    </div>
                  )}

                  {option.description && (
                    <p className={`text-[11px] px-2 line-clamp-2 leading-relaxed ${isSelected ? 'text-amber-50' : 'text-amber-700/50'}`}>
                      {option.description}
                    </p>
                  )}

                  {/* Selected Indicator */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        className="absolute top-4 right-4 bg-orange-400 text-white rounded-full p-1.5"
                      >
                        <CheckCircle2 className="w-5 h-5" />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Card ID Indicator (Design Element) */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1 opacity-20">
                    <div className="w-1 h-1 rounded-full bg-orange-950" />
                    <div className="w-1 h-1 rounded-full bg-orange-950" />
                    <div className="w-1 h-1 rounded-full bg-orange-950" />
                  </div>
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </main>

      {/* Floating Action Bar */}
      <footer className="fixed bottom-8 left-1/2 -translate-x-1/2 max-w-lg w-[calc(100%-3rem)] z-50">
        <motion.div 
          layout
          className="bg-[#5D4037] text-white p-4 rounded-[2.5rem] shadow-2xl flex items-center justify-between gap-4 border-2 border-white/10 backdrop-blur-lg"
        >
          <div className="pl-4 flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-amber-200/50">已選張數</span>
            <div className="flex items-center gap-2">
              <Heart className={`w-4 h-4 ${currentSelections.length > 0 ? 'text-amber-400 fill-amber-400' : 'text-amber-500/30'}`} />
              <span className="font-serif text-lg leading-none">{currentSelections.length} / 2</span>
            </div>
          </div>

          <button
            onClick={handleReveal}
            disabled={currentSelections.length < 2 || (currentStep === 2 && currentSelections.some(id => !subSelections[id]?.[0]))}
            className={`
              h-14 px-8 rounded-full font-bold transition-all flex items-center gap-2
              ${(currentSelections.length === 2 && (currentStep !== 2 || currentSelections.every(id => subSelections[id]?.[0])))
                ? 'bg-amber-500 text-white shadow-lg shadow-amber-900/20 active:scale-95' 
                : 'bg-white/10 text-white/30 cursor-not-allowed'
              }
            `}
            id="reveal-button"
          >
            <span>揭開命運吧！</span>
            <Sparkles className="w-5 h-5" />
          </button>
        </motion.div>
      </footer>

      {/* Sub-menu Overlay */}
      <AnimatePresence>
        {activeSubMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-orange-950/40 backdrop-blur-md flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white w-full max-w-sm rounded-[3rem] p-8 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4">
                <button onClick={() => setActiveSubMenu(null)} className="p-2 text-amber-200 hover:text-amber-400 transition-colors">
                  <ArrowLeft className="w-6 h-6" />
                </button>
              </div>

              <div className="text-center mb-8">
                <div className="inline-block p-4 bg-amber-50 text-amber-500 rounded-full mb-4">
                  {getOptionIcon(activeSubMenu)}
                </div>
                <h3 className="text-2xl font-serif text-orange-950 mb-2">
                  {STEPS[currentStep].options.find(o => o.id === activeSubMenu)?.name} 推薦什麼？
                </h3>
                <p className="text-sm text-amber-600/60">
                  {currentStep === 0 ? "挑選最想停靠的區域 (可複選)" : "挑選一個最讓妳們心動的細節"}
                </p>
              </div>

              <div className="space-y-3 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
                {(() => {
                  const option = STEPS[currentStep].options.find(o => o.id === activeSubMenu);
                  const subOptions = option?.subOptions || [];
                  const filteredSubs = (currentStep === 2 && destinationHighlights)
                    ? subOptions.filter(sub => !!destinationHighlights[sub.id])
                    : subOptions;

                  const selectedItems = subSelections[activeSubMenu] || [];

                  return filteredSubs.map(sub => {
                    const isItemSelected = selectedItems.includes(sub.id);
                    return (
                      <button
                        key={sub.id}
                        onClick={() => handleSubSelect(activeSubMenu, sub.id)}
                        className={`
                          w-full p-5 rounded-2xl border-2 transition-all flex items-center justify-between group
                          ${isItemSelected 
                            ? 'border-amber-400 bg-amber-50/50' 
                            : 'border-orange-50/50 hover:border-orange-100 hover:bg-orange-50/30'
                          }
                        `}
                      >
                        <div>
                          <div className={`font-medium transition-colors ${isItemSelected ? 'text-amber-900' : 'text-orange-950/70 group-hover:text-amber-900'}`}>
                            {sub.name}
                          </div>
                          <div className="text-[10px] text-amber-600/40 mt-1">{sub.description}</div>
                        </div>
                        {isItemSelected ? (
                          <div className="bg-amber-500 text-white p-1 rounded-full">
                            <CheckCircle2 className="w-3 h-3" />
                          </div>
                        ) : (
                          <ArrowRight className="w-4 h-4 text-amber-100 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
                        )}
                      </button>
                    );
                  });
                })()}
              </div>

              {currentStep === 0 && (
                <div className="mt-8">
                  <button 
                    onClick={() => setActiveSubMenu(null)}
                    disabled={(subSelections[activeSubMenu]?.length || 0) === 0}
                    className={`
                      w-full py-4 rounded-xl font-bold transition-all
                      ${(subSelections[activeSubMenu]?.length || 0) > 0
                        ? 'bg-[#5D4037] text-white shadow-xl active:scale-95'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      }
                    `}
                  >
                    選好了，下一張卡！
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

