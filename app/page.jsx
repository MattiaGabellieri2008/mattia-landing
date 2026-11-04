'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Code2,
  Rocket,
  Building2,
  Mail,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Send,
  Copy,
  Check,
  ChevronRight,
  ChevronLeft,
  ExternalLink,
  Star,
  GitFork,
  FolderGit2,
  CheckSquare,
  AlertCircle,
  RefreshCw,
  Plus,
  X
} from 'lucide-react';

// Social links configuration
const socialLinks = {
  email: 'mattiagabellieri2008@gmail.com',
  github: 'https://github.com/MattiaGabellieri2008',
  linkedin: 'https://www.linkedin.com/in/mattia-gabellieri-a2bab6447/',
  linkedinHandle: 'mattia-gabellieri-a2bab6447',
  instagram: 'https://www.instagram.com/mattia.gabellieri_/',
  instagramHandle: '@mattia.gabellieri_'
};

// Store release pipeline stages
const storePipelineStages = [
  {
    step: 1,
    title: 'Architettura & DB',
    badge: 'SQL & Firebase',
    detail: 'Progettazione dello schema relazionale e sincronizzazione dati real-time.',
    color: '#FFE600'
  },
  {
    step: 2,
    title: 'Web Cloud App',
    badge: 'Next.js & React',
    detail: 'Dashboard ad altissime prestazioni per gestione e controllo operativo.',
    color: '#00F5D4'
  },
  {
    step: 3,
    title: 'Mobile iOS & Android',
    badge: 'App Native / WebView Pro',
    detail: 'Sviluppo app mobile con notifiche push e sincronizzazione cloud bidirezionale.',
    color: '#FF90E8'
  },
  {
    step: 4,
    title: 'Store Proprietari',
    badge: 'App Store & Google Play',
    detail: 'Gestione completa del rilascio ufficiale su Apple App Store e Google Play Store.',
    color: '#A3E635'
  }
];

// Language color mapping for authentic GitHub repos
const languageColorMap = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Python: '#3572A5',
  Java: '#b07219',
  Dart: '#00B4AB'
};

function Github({ className }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 16 16"
      fill="currentColor"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.39.07.53-.17.53-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.65 7.65 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.14.46.54.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

function Linkedin({ className }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.78C.8 0 0 .77 0 1.73v20.54C0 23.23.8 24 1.78 24h20.44c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function Instagram({ className }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

export default function Page() {
  const [currentYear, setCurrentYear] = useState(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  // Visual burst effects state
  const [bursts, setBursts] = useState([]);
  const triggerBurst = (x, y, label) => {
    const id = Date.now() + Math.random();
    setBursts((prev) => [...prev, { id, x, y, label, color: '#FFE600' }]);
    setTimeout(() => {
      setBursts((prev) => prev.filter((b) => b.id !== id));
    }, 900);
  };

  // Pipeline state
  const [activePipelineStage, setActivePipelineStage] = useState(0);

  // REAL GITHUB REPOSITORIES FETCHING STATE (api.github.com/users/MattiaGabellieri2008/repos)
  const [githubInputUsername, setGithubInputUsername] = useState('MattiaGabellieri2008');
  const [githubState, setGithubState] = useState({
    resolvedUsername: 'MattiaGabellieri2008',
    profile: null,
    repos: [],
    loading: true,
    error: null,
    lastCheckedAt: ''
  });
  const [excludeForks, setExcludeForks] = useState(false);

  useEffect(() => {
    fetchRealGithubData('MattiaGabellieri2008');
  }, []);

  const fetchRealGithubData = async (usernameToFetch) => {
    const cleanUser = usernameToFetch.trim() || 'MattiaGabellieri2008';
    setGithubState((prev) => ({ ...prev, loading: true, error: null }));

    try {
      const [userRes, reposRes] = await Promise.all([
        fetch(`https://api.github.com/users/${cleanUser}`),
        fetch(`https://api.github.com/users/${cleanUser}/repos?per_page=100&sort=updated`)
      ]);

      if (!userRes.ok) {
        throw new Error(`Utente GitHub "${cleanUser}" non trovato (Status ${userRes.status}).`);
      }
      if (!reposRes.ok) {
        throw new Error(`Impossibile recuperare le repository per "${cleanUser}".`);
      }

      const profileData = await userRes.json();
      const reposData = await reposRes.json();

      setGithubState({
        resolvedUsername: cleanUser,
        profile: profileData,
        repos: Array.isArray(reposData) ? reposData : [],
        loading: false,
        error: null,
        lastCheckedAt: new Date().toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' })
      });
    } catch (err) {
      setGithubState((prev) => ({
        ...prev,
        loading: false,
        error: err.message || 'Errore di connessione alle API di GitHub.'
      }));
    }
  };

  const handleManualGithubLoad = (e) => {
    e.preventDefault();
    fetchRealGithubData(githubInputUsername);
  };

  const realFilteredRepos = githubState.repos.filter((r) => {
    if (excludeForks && r.fork) return false;
    return true;
  });

  // ============================================================================
  // 5-STEP INTERACTIVE PROJECT CONFIGURATOR (RESEND / GMAIL API)
  // ============================================================================
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    clientProfile: '',
    customClientProfile: '',
    projectType: '',
    customProjectType: '',
    projectStage: '',
    targetPlatforms: '',
    budgetTier: '',
    timeline: '',
    collaborationMode: '',
    selectedFeatures: [],
    customFeatureInput: '',
    preferredContactMethod: 'Email',
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    description: ''
  });

  const [submitStatus, setSubmitStatus] = useState('idle');
  const [submitError, setSubmitError] = useState('');
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [formError, setFormError] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedBrief, setCopiedBrief] = useState(false);

  const soluzioniRef = useRef(null);
  const ecosistemaRef = useRef(null);
  const githubRef = useRef(null);
  const configuratorRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const startPresetConfiguration = (profile, type, platforms, customNote = '') => {
    setFormData((prev) => ({
      ...prev,
      clientProfile: profile || prev.clientProfile,
      projectType: type || prev.projectType,
      targetPlatforms: platforms || prev.targetPlatforms,
      description: customNote || prev.description
    }));
    setCurrentStep(1);
    setSubmitStatus('idle');
    setPrivacyAccepted(false);
    setFormError('');
    scrollToSection(configuratorRef);
  };

  const toggleFeatureTag = (feature) => {
    setFormData((prev) => {
      const exists = prev.selectedFeatures.includes(feature);
      return {
        ...prev,
        selectedFeatures: exists
          ? prev.selectedFeatures.filter((f) => f !== feature)
          : [...prev.selectedFeatures, feature]
      };
    });
  };

  const handleAddCustomFeature = () => {
    const clean = formData.customFeatureInput.trim();
    if (!clean) return;
    setFormData((prev) => ({
      ...prev,
      selectedFeatures: prev.selectedFeatures.includes(clean)
        ? prev.selectedFeatures
        : [...prev.selectedFeatures, clean],
      customFeatureInput: ''
    }));
    setFormError('');
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(socialLinks.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const getEffectiveClientProfile = () =>
    formData.clientProfile === 'Altro (Specifica)'
      ? formData.customClientProfile.trim() || 'Altro'
      : formData.clientProfile;

  const getEffectiveProjectType = () =>
    formData.projectType === 'Progetto Personalizzato (Descrivi tu)'
      ? formData.customProjectType.trim() || 'Progetto Personalizzato'
      : formData.projectType;

  const buildBriefText = () => {
    return `PROPOSTA DI PROGETTO PER MATTIA GABELLIERI
==================================================
1. PROFILO & OBIETTIVO
- Profilo Cliente: ${getEffectiveClientProfile()}
- Soluzione Richiesta: ${getEffectiveProjectType()}
- Piattaforme Target: ${formData.targetPlatforms}

2. BUDGET & INVESTIMENTO
- Fascia di Budget: ${formData.budgetTier}
- Formula di Collaborazione: ${formData.collaborationMode}

3. STATO & TEMPISTICHE
- Stato Attuale: ${formData.projectStage}
- Tempistiche: ${formData.timeline}

4. MODULI & STORE MOBILE
- Moduli Selezionati: ${formData.selectedFeatures.join(', ') || 'Da definire'}

5. DATI CLIENTE / AZIENDA
- Nome e Cognome: ${formData.fullName}
- Azienda / Attività: ${formData.companyName || 'Non specificata'}
- Email: ${formData.email}
- Telefono / WhatsApp: ${formData.phone || 'Non specificato'}
- Ricontatto Preferito: ${formData.preferredContactMethod}

6. DESCRIZIONE DEL PROGETTO
${formData.description}
==================================================`;
  };

  const handleCopyBrief = async () => {
    try {
      await navigator.clipboard.writeText(buildBriefText());
      setCopiedBrief(true);
      setTimeout(() => setCopiedBrief(false), 2500);
    } catch {
      setCopiedBrief(true);
      setTimeout(() => setCopiedBrief(false), 2500);
    }
  };

  const getGmailComposeLink = () => {
    const subject = encodeURIComponent(
      `Proposta Progetto [${getEffectiveProjectType()}] - ${formData.fullName || 'Nuovo Cliente'}`
    );
    const body = encodeURIComponent(buildBriefText());
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${socialLinks.email}&su=${subject}&body=${body}`;
  };

  // Validation function for each step
  const validateStepAndProceed = (targetStep) => {
    if (targetStep < currentStep) {
      setFormError('');
      setCurrentStep(targetStep);
      return;
    }

    if (currentStep === 1 || targetStep > 1) {
      const validProfile =
        formData.clientProfile &&
        (formData.clientProfile !== 'Altro (Specifica)' ||
          formData.customClientProfile.trim().length > 0);
      const validType =
        formData.projectType &&
        (formData.projectType !== 'Progetto Personalizzato (Descrivi tu)' ||
          formData.customProjectType.trim().length > 0);

      if (!validProfile || !validType) {
        setFormError(
          'Completa tutti i campi dello Step 1 (Profilo Cliente e Soluzione desiderata) prima di andare avanti.'
        );
        return;
      }
    }

    if (targetStep > 2) {
      if (!formData.targetPlatforms || !formData.projectStage || !formData.timeline) {
        setFormError(
          'Seleziona Piattaforme, Stato e Tempistiche dello Step 2 prima di procedere.'
        );
        return;
      }
    }

    if (targetStep > 3) {
      if (!formData.budgetTier || !formData.collaborationMode) {
        setFormError(
          'Seleziona la tua fascia di budget e la formula di collaborazione nello Step 3 prima di procedere.'
        );
        return;
      }
    }

    if (targetStep > 4) {
      if (!formData.selectedFeatures || formData.selectedFeatures.length === 0) {
        setFormError(
          'Seleziona almeno una funzionalità o aggiungi la tua esigenza nello Step 4 prima di procedere.'
        );
        return;
      }
    }

    setFormError('');
    setCurrentStep(targetStep);
  };

  // Submission handler using Resend Next.js API Route (/api/send-email)
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!privacyAccepted) {
      setFormError('Leggi e accetta la Privacy Policy prima di inviare la richiesta.');
      return;
    }

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.description.trim()) {
      setFormError(
        'Compila Nome, Email e la descrizione del progetto prima di inviare la richiesta!'
      );
      return;
    }

    setFormError('');
    setSubmitError('');
    setSubmitStatus('submitting');

    const payloadData = {
      to: socialLinks.email,
      subject: `Nuova Proposta Progetto: ${getEffectiveProjectType()} — ${formData.fullName}`,
      clientName: formData.fullName,
      companyName: formData.companyName || 'Non specificata',
      clientEmail: formData.email,
      privacyPolicyAccepted: true,
      phone: formData.phone || 'Non specificato',
      preferredContactMethod: formData.preferredContactMethod,
      clientProfile: getEffectiveClientProfile(),
      projectType: getEffectiveProjectType(),
      targetPlatforms: formData.targetPlatforms,
      budgetTier: formData.budgetTier,
      projectStage: formData.projectStage,
      timeline: formData.timeline,
      collaborationMode: formData.collaborationMode,
      selectedFeatures: formData.selectedFeatures,
      description: formData.description,
      rawBrief: buildBriefText()
    };

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(payloadData)
      });

      let result;
      try {
        result = await response.json();
      } catch {
        result = null;
      }

      if (!response.ok || result?.success !== true) {
        setSubmitError(
          result?.error ||
            `Invio automatico non riuscito (errore ${response.status}).`
        );
        setSubmitStatus('fallback_mail');
        return;
      }

      setSubmitStatus('success');
    } catch (error) {
      console.error('Could not submit the project inquiry:', error);
      setSubmitError('Non riesco a raggiungere il servizio email. Riprova o invia la scheda tramite Gmail.');
      setSubmitStatus('fallback_mail');
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F4EB] text-[#111111] relative overflow-x-hidden selection:bg-[#FFE600] selection:text-[#111111] font-body">
      {/* GOOGLE FONTS + NEO-BRUTALIST SCRAPBOOK STYLES */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=JetBrains+Mono:wght@500;700;800&family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Space+Grotesk:wght@700;800&display=swap');

        .font-display { font-family: 'Space Grotesk', sans-serif; }
        .font-body { font-family: 'Plus Jakarta Sans', sans-serif; }
        .font-mono-code { font-family: 'JetBrains Mono', monospace; }
        .font-hand { font-family: 'Caveat', cursive; }

        .notebook-grid {
          background-color: #F7F4EB;
          background-image: radial-gradient(#111111 1.35px, transparent 1.35px);
          background-size: 24px 24px;
        }

        .brutal-card {
          border: 3px solid #111111;
          box-shadow: 6px 6px 0px #111111;
          transition: transform 0.14s ease, box-shadow 0.14s ease;
        }

        .brutal-card-lg {
          border: 4px solid #111111;
          box-shadow: 9px 9px 0px #111111;
        }

        .brutal-btn {
          border: 3px solid #111111;
          box-shadow: 4px 4px 0px #111111;
          transition: transform 0.1s ease, box-shadow 0.1s ease;
        }
        .brutal-btn:hover {
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0px #111111;
        }
        .brutal-btn:active {
          transform: translate(3px, 3px);
          box-shadow: 1px 1px 0px #111111;
        }

        .masking-tape {
          background: rgba(255, 230, 0, 0.72);
          border: 2px dashed rgba(17, 17, 17, 0.45);
          box-shadow: 2px 2px 0px rgba(17, 17, 17, 0.2);
        }

        @keyframes popBurst {
          0% { transform: translate(-50%, -50%) scale(0.4) rotate(-8deg); opacity: 1; }
          60% { transform: translate(-50%, -95%) scale(1.12) rotate(5deg); opacity: 1; }
          100% { transform: translate(-50%, -135%) scale(0.9) rotate(-3deg); opacity: 0; }
        }
        .animate-burst {
          animation: popBurst 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* BACKGROUND DOT-GRID TEXTURE */}
      <div className="fixed inset-0 notebook-grid pointer-events-none z-0 opacity-90" />

      {/* FLOATING POP BURST PARTICLES */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        {bursts.map((b) => (
          <div
            key={b.id}
            style={{ left: b.x, top: b.y, backgroundColor: b.color }}
            className="fixed px-3 py-1 border-3 border-[#111111] shadow-[4px_4px_0px_#111111] font-mono-code font-extrabold text-xs uppercase tracking-wider text-[#111111] animate-burst"
          >
            {b.label}
          </div>
        ))}
      </div>

      {/* TOP NEO-BRUTALIST DESKTOP / NOTEBOOK BAR */}
      <header className="sticky top-0 z-40 bg-[#F7F4EB]/95 backdrop-blur-sm border-b-4 border-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-20 h-auto py-3 flex flex-col items-stretch lg:flex-row lg:items-center lg:justify-between gap-4 overflow-x-hidden">
          {/* Brand Logo Stamp */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              type="button"
              onClick={(e) => {
                triggerBurst(e.clientX, e.clientY, 'MATTIA.OS v2.7 ⚡');
              }}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FFE600] brutal-btn flex flex-col items-center justify-center font-mono-code font-extrabold text-xs sm:text-sm leading-none cursor-pointer"
            >
              <span>MG</span>
              <span className="text-[8px] sm:text-[9px] bg-[#111111] text-[#FFE600] px-1 mt-0.5">DEV</span>
            </button>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-display font-extrabold text-sm sm:text-lg tracking-tight uppercase truncate">
                  Mattia Gabellieri
                </span>
                <span className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#A3E635] border-2 border-[#111111] font-mono-code font-bold text-[11px] shadow-[2px_2px_0px_#111111] shrink-0">
                  <span className="w-2 h-2 rounded-full bg-[#111111] animate-ping" />
                  OPEN FOR PROJECTS
                </span>
              </div>
              <p className="font-mono-code text-[10px] sm:text-[11px] text-zinc-700 hidden sm:block truncate">
                Full-Stack Studio • Web Cloud + App iOS & Android
              </p>
            </div>
          </div>

          {/* Notebook Section Tabs */}
          <nav className="hidden xl:flex items-center gap-2 font-mono-code text-xs font-extrabold">
            <button
              type="button"
              onClick={() => scrollToSection(soluzioniRef)}
              className="px-3 py-1.5 bg-white border-2 border-[#111111] shadow-[2px_2px_0px_#111111] hover:bg-[#FFE600] transition-colors cursor-pointer"
            >
              CLIENTI
            </button>
            <button
              type="button"
              onClick={() => scrollToSection(ecosistemaRef)}
              className="px-3 py-1.5 bg-white border-2 border-[#111111] shadow-[2px_2px_0px_#111111] hover:bg-[#00F5D4] transition-colors cursor-pointer"
            >
              APP STORE & STACK
            </button>
            <button
              type="button"
              onClick={() => scrollToSection(githubRef)}
              className="px-3 py-1.5 bg-white border-2 border-[#111111] shadow-[2px_2px_0px_#111111] hover:bg-[#A3E635] transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GITHUB REPOSITORY</span>
            </button>
          </nav>

          {/* Interactive Controls: Primary CTA */}
          <div className="flex w-full items-center gap-2 lg:w-auto lg:shrink-0">
            <button
              type="button"
              onClick={() => scrollToSection(configuratorRef)}
              className="w-full lg:w-auto justify-center text-center px-3 sm:px-4 py-2 bg-[#FF5722] text-white brutal-btn font-mono-code font-extrabold text-[11px] sm:text-sm uppercase flex items-center gap-1 sm:gap-1.5 cursor-pointer"
            >
              <span>PROPONI PROGETTO/COLLABORA CON ME</span>
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            </button>
          </div>
        </div>
      </header>

      {/* MAIN NOTEBOOK WORKSPACE */}
      <main className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-16 sm:space-y-20 overflow-x-hidden">
        {/* ====================================================================
            HERO SECTION: NEO-BRUTALIST SCRAPBOOK HACKER
           ==================================================================== */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-white brutal-card-lg p-5 sm:p-10 relative overflow-hidden">
            <div className="masking-tape px-3 sm:px-4 py-1 font-mono-code font-extrabold text-[10px] sm:text-[11px] uppercase inline-block mb-4 -rotate-1 max-w-full truncate">
              📌 MATTIA GABELLIERI - STUDENTE & SVILUPPATORE (CLASSE 2008)
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl uppercase leading-[1.08] tracking-tight break-words">
              Giovane Sviluppatore con{' '}
              <span className="bg-[#FFE600] px-2 border-2 border-[#111111] inline-block -rotate-1 my-1">
                Idee Visionarie
              </span>{' '}
              & Mentalità d&apos;Impresa.
            </h1>

            <p className="mt-4 sm:mt-5 text-sm sm:text-lg font-semibold text-zinc-800 leading-relaxed break-words">
              Trasformo problemi reali di business in{' '}
              <strong className="bg-[#00F5D4] px-1.5 border border-[#111111] inline-block my-0.5">
                software gestionali su misura
              </strong>
              , piattaforme Web Cloud e{' '}
              <strong className="bg-[#FF90E8] px-1.5 border border-[#111111] inline-block my-0.5">
                App Mobile iOS & Android
              </strong>{' '}
              pubblicate direttamente su <strong>Apple App Store</strong> e{' '}
              <strong>Google Play Store</strong>.
            </p>

            {/* Primary CTA Buttons */}
            <div className="mt-6 sm:mt-7 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => scrollToSection(configuratorRef)}
                className="w-full sm:w-auto px-5 sm:px-6 py-3.5 sm:py-4 bg-[#FF5722] text-white brutal-btn font-mono-code font-extrabold text-xs sm:text-sm uppercase flex items-center justify-center gap-2 cursor-pointer"
              >
                <Rocket className="w-4 h-4 shrink-0" />
                <span>CONFIGURA IL TUO PROGETTO</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection(githubRef)}
                className="w-full sm:w-auto px-5 sm:px-6 py-3.5 sm:py-4 bg-[#FFE600] text-[#111111] brutal-btn font-mono-code font-extrabold text-xs sm:text-sm uppercase flex items-center justify-center gap-2 cursor-pointer"
              >
                <Github className="w-4 h-4 shrink-0" />
                <span>ESPLORA REPOSITORY GITHUB</span>
              </button>
            </div>

            {/* Direct Social Strip */}
            <div className="mt-6 sm:mt-7 pt-4 sm:pt-5 border-t-3 border-dashed border-[#111111] flex flex-wrap items-center gap-2.5 sm:gap-3 font-mono-code text-xs font-extrabold">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-3.5 py-2.5 bg-[#00F5D4] text-[#111111] brutal-btn flex items-center justify-center gap-2"
              >
                <Linkedin className="w-4 h-4 shrink-0" />
                <span>LinkedIn Ufficiale</span>
              </a>

              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-3.5 py-2.5 bg-[#FF90E8] text-[#111111] brutal-btn flex items-center justify-center gap-2"
              >
                <Instagram className="w-4 h-4 shrink-0" />
                <span className="truncate">{socialLinks.instagramHandle}</span>
              </a>
            </div>
          </div>
        </section>

        {/* ====================================================================
            SECTION 01: TWO TARGET CLIENT PATHS (IMPRENDITORI & STARTUP/AGENZIE)
           ==================================================================== */}
        <section ref={soluzioniRef} className="space-y-6">
          <div>
            <span className="px-3 py-1 bg-[#111111] text-[#FFE600] font-mono-code font-extrabold text-xs uppercase inline-block">
              01 // CON CHI LAVORO & SOLUZIONI SU MISURA
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl uppercase mt-3 break-words">
              Due Percorsi Chiari per il tuo Progetto.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Path A: Imprenditori & Attività Commerciali */}
            <div className="bg-white brutal-card-lg p-5 sm:p-8 flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 sm:px-3 py-1 bg-[#FFE600] border-2 border-[#111111] font-mono-code font-extrabold text-[10px] sm:text-xs uppercase">
                    IMPRENDITORI & ATTIVITÀ
                  </span>
                  <Building2 className="w-6 h-6 shrink-0" />
                </div>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl uppercase break-words">
                  Gestionali su Misura, Web App & App Mobile Chiavi in Mano.
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-zinc-800 leading-relaxed break-words">
                  Hai un&apos;attività commerciale, un salone o un&apos;azienda e vuoi digitalizzare
                  prenotazioni, clienti, magazzino o cassa? Progetto la piattaforma completa e
                  pubblico la tua app ufficiale su <strong>App Store</strong> e{' '}
                  <strong>Google Play</strong>.
                </p>
                <ul className="space-y-2 font-mono-code text-xs font-bold">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5722] shrink-0 mt-0.5" />
                    <span className="break-words">Zero complicazioni tecniche: penso a tutto io da zero allo store</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5722] shrink-0 mt-0.5" />
                    <span className="break-words">Risparmio di tempo quotidiano e controllo totale degli incassi</span>
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={() =>
                  startPresetConfiguration(
                    'Imprenditore / Attività Commerciale',
                    'Ecosistema Completo (Web Cloud + App iOS & Android)',
                    'Web Cloud + App iOS (App Store) + Android (Google Play)'
                  )
                }
                className="w-full py-3.5 bg-[#FFE600] brutal-btn font-mono-code font-extrabold text-[11px] sm:text-xs uppercase flex items-center justify-center gap-2 cursor-pointer text-center px-2"
              >
                <span>RICHIEDI SOLUZIONE PER LA TUA ATTIVITÀ</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            </div>

            {/* Path B: Aziende Tech, Startup & Agenzie */}
            <div className="bg-white brutal-card-lg p-5 sm:p-8 flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 sm:px-3 py-1 bg-[#00F5D4] border-2 border-[#111111] font-mono-code font-extrabold text-[10px] sm:text-xs uppercase">
                    STARTUP & AGENZIE TECH
                  </span>
                  <Code2 className="w-6 h-6 shrink-0" />
                </div>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl uppercase break-words">
                  Sviluppo MVP, Prodotti SaaS & App iOS/Android Scalabili.
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-zinc-800 leading-relaxed break-words">
                  Cerchi uno sviluppatore rapido, autonomo e con mentalità di prodotto su{' '}
                  <strong>Next.js, React, TypeScript, Firebase Data Connect, SQL e Mobile</strong>?
                  Collaboro con startup e team per spedire in produzione codice pulito e veloce.
                </p>
                <ul className="space-y-2 font-mono-code text-xs font-bold">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="break-words">Architetture tipizzate TypeScript + Database SQL relazionali</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="break-words">Gestione completa release TestFlight, App Store & Google Play Console</span>
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={() =>
                  startPresetConfiguration(
                    'Startup / Azienda Tech / Agenzia',
                    'Collaborazione Sviluppo Full-Stack / MVP',
                    'Web Cloud + App iOS (App Store) + Android (Google Play)'
                  )
                }
                className="w-full py-3.5 bg-[#00F5D4] brutal-btn font-mono-code font-extrabold text-[11px] sm:text-xs uppercase flex items-center justify-center gap-2 cursor-pointer text-center px-2"
              >
                <span>AVVIA COLLABORAZIONE TECNICA / MVP</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            </div>
          </div>
        </section>

        {/* ====================================================================
            SECTION 02: MOBILE APP STORE PIPELINE & FULL-STACK ARSENAL
           ==================================================================== */}
        <section ref={ecosistemaRef} className="space-y-6">
          <div>
            <span className="px-3 py-1 bg-[#111111] text-[#00F5D4] font-mono-code font-extrabold text-xs uppercase inline-block">
              02 // COMPETENZE FULL-STACK & RILASCIO SUGLI STORE PROPRIETARI
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl uppercase mt-3 break-words">
              Web Cloud + App iOS & Android Pubblicate sugli Store.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {storePipelineStages.map((stage, idx) => (
              <div
                key={stage.step}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActivePipelineStage(idx);
                  }
                }}
                onClick={() => {
                  setActivePipelineStage(idx);
                }}
                style={{
                  backgroundColor: activePipelineStage === idx ? stage.color : '#FFFFFF'
                }}
                className="p-5 brutal-card cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between font-mono-code text-xs font-extrabold mb-2 gap-2">
                    <span className="px-2 py-0.5 bg-[#111111] text-white shrink-0">STEP {stage.step}</span>
                    <span className="underline truncate">{stage.badge}</span>
                  </div>
                  <h4 className="font-display font-extrabold text-lg uppercase break-words">{stage.title}</h4>
                  <p className="text-xs font-semibold text-zinc-800 mt-2 leading-relaxed break-words">
                    {stage.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ====================================================================
            SECTION 03: REAL GITHUB REPOSITORIES ONLY + LINKEDIN & INSTAGRAM
           ==================================================================== */}
        <section ref={githubRef} className="space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div>
              <div className="inline-flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 bg-[#111111] text-[#A3E635] font-mono-code font-extrabold text-xs uppercase">
                  03 // REPOSITORY GITHUB & PROFILI UFFICIALI
                </span>
                <span className="px-3 py-1 bg-[#FFE600] border-2 border-[#111111] font-mono-code font-extrabold text-xs uppercase">
                  GITHUB LIVE
                </span>
              </div>
              <h2 className="font-display font-extrabold text-2xl sm:text-4xl uppercase mt-3 break-words">
                Le mie Repository GitHub.
              </h2>
            </div>

            {/* Filter Toggle */}
            <div className="flex flex-wrap items-center gap-2 font-mono-code text-xs font-extrabold">
              <button
                type="button"
                onClick={() => {
                  setExcludeForks(false);
                }}
                className={`px-3 py-2 border-2 border-[#111111] cursor-pointer ${
                  !excludeForks ? 'bg-[#FFE600] shadow-[3px_3px_0px_#111111]' : 'bg-white'
                }`}
              >
                LE MIE REPOSITORY
              </button>
              <button
                type="button"
                onClick={() => {
                  setExcludeForks(true);
                }}
                className={`px-3 py-2 border-2 border-[#111111] cursor-pointer ${
                  excludeForks ? 'bg-[#00F5D4] shadow-[3px_3px_0px_#111111]' : 'bg-white'
                }`}
              >
                SOLO SORGENTI (NO FORK)
              </button>
            </div>
          </div>

          <div className="space-y-8">
            {/* Authentic Live GitHub Repositories Feed */}
            <div className="w-full bg-white brutal-card-lg p-5 sm:p-8 space-y-6 overflow-hidden">
              <div className="p-4 bg-[#F7F4EB] border-3 border-[#111111] shadow-[4px_4px_0px_#111111] space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-10 h-10 bg-[#111111] text-[#FFE600] flex items-center justify-center border-2 border-[#111111] shrink-0">
                      <Github className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-display font-extrabold text-sm sm:text-lg truncate max-w-[220px] sm:max-w-xs">
                          github.com/{githubState.resolvedUsername}
                        </span>
                        <span className="px-2 py-0.5 bg-[#A3E635] border border-[#111111] font-mono-code font-extrabold text-[10px] shrink-0">
                          API LIVE
                        </span>
                      </div>
                      <p className="font-mono-code text-[10px] sm:text-[11px] text-zinc-700 truncate">
                        Mostra esclusivamente le repository pubbliche reali
                      </p>
                    </div>
                  </div>

                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 bg-[#111111] text-white brutal-btn font-mono-code font-extrabold text-xs flex items-center justify-center gap-1.5 shrink-0"
                  >
                    <span>APRI PROFILO</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  </a>
                </div>

                <form
                  onSubmit={handleManualGithubLoad}
                  className="pt-2 border-t-2 border-dashed border-[#111111] flex flex-col sm:flex-row items-stretch sm:items-center gap-2"
                >
                  <div className="flex-1 flex items-center bg-white border-2 border-[#111111] px-3 py-1.5 font-mono-code text-xs min-w-0">
                    <span className="text-zinc-500 select-none shrink-0">github.com/</span>
                    <input
                      type="text"
                      value={githubInputUsername}
                      onChange={(e) => setGithubInputUsername(e.target.value)}
                      placeholder="tuo-username"
                      className="w-full font-extrabold text-[#111111] focus:outline-none bg-transparent ml-0.5 min-w-0 truncate"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={githubState.loading}
                    className="px-4 py-2.5 bg-[#FFE600] border-2 border-[#111111] shadow-[3px_3px_0px_#111111] font-mono-code font-extrabold text-xs uppercase flex items-center justify-center gap-1.5 cursor-pointer hover:bg-[#00F5D4] shrink-0"
                  >
                    <RefreshCw
                      className={`w-3.5 h-3.5 shrink-0 ${githubState.loading ? 'animate-spin' : ''}`}
                    />
                    <span>SINCRONIZZA</span>
                  </button>
                </form>
              </div>

              {githubState.profile && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono-code text-xs">
                  <div className="p-3 bg-[#FFE600] border-2 border-[#111111] shadow-[3px_3px_0px_#111111]">
                    <div className="text-[10px] font-bold">REPO REALI</div>
                    <div className="font-display font-extrabold text-xl truncate">
                      {githubState.profile.public_repos ?? githubState.repos.length}
                    </div>
                  </div>
                  <div className="p-3 bg-[#00F5D4] border-2 border-[#111111] shadow-[3px_3px_0px_#111111]">
                    <div className="text-[10px] font-bold">ACCOUNT</div>
                    <div className="font-display font-extrabold text-sm truncate">
                      @{githubState.profile.login}
                    </div>
                  </div>
                  <div className="p-3 bg-[#FF90E8] border-2 border-[#111111] shadow-[3px_3px_0px_#111111]">
                    <div className="text-[10px] font-bold">FOLLOWERS</div>
                    <div className="font-display font-extrabold text-xl truncate">
                      {githubState.profile.followers ?? 0}
                    </div>
                  </div>
                  <div className="p-3 bg-[#A3E635] border-2 border-[#111111] shadow-[3px_3px_0px_#111111]">
                    <div className="text-[10px] font-bold">ULTIMO CHECK</div>
                    <div className="font-display font-extrabold text-sm truncate">
                      {githubState.lastCheckedAt || 'Adesso'}
                    </div>
                  </div>
                </div>
              )}

              {githubState.loading && (
                <div className="p-8 bg-[#F7F4EB] border-3 border-[#111111] text-center space-y-3 font-mono-code">
                  <RefreshCw className="w-8 h-8 mx-auto animate-spin text-[#FF5722]" />
                  <div className="font-extrabold text-xs sm:text-sm uppercase break-words">
                    Interrogazione in corso su api.github.com/users/{githubInputUsername}/repos...
                  </div>
                </div>
              )}

              {!githubState.loading && githubState.error && (
                <div className="p-6 bg-[#FFF9C4] border-3 border-[#111111] shadow-[4px_4px_0px_#111111] space-y-3">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-[#FF5722] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-display font-extrabold text-base uppercase">
                        Verifica Username GitHub
                      </h4>
                      <p className="font-mono-code text-xs text-zinc-800 mt-1 break-words">
                        {githubState.error}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {!githubState.loading && !githubState.error && realFilteredRepos.length === 0 && (
                <div className="p-7 bg-[#F7F4EB] border-3 border-[#111111] shadow-[4px_4px_0px_#111111] text-center space-y-3">
                  <FolderGit2 className="w-9 h-9 mx-auto text-[#111111]" />
                  <h4 className="font-display font-extrabold text-base sm:text-lg uppercase break-words">
                    Nessuna repository trovata su @{githubState.resolvedUsername}
                  </h4>
                </div>
              )}

              {!githubState.loading && !githubState.error && realFilteredRepos.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {realFilteredRepos.map((repo) => {
                    const langColor = languageColorMap[repo.language] || '#FFE600';
                    const updatedDate = new Date(
                      repo.pushed_at || repo.updated_at
                    ).toLocaleDateString('it-IT', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric'
                    });

                    return (
                      <a
                        key={repo.id}
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 sm:p-5 bg-[#F7F4EB] hover:bg-[#FFE600]/40 brutal-card flex flex-col justify-between group overflow-hidden"
                      >
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex items-center gap-2 font-mono-code font-extrabold text-xs sm:text-sm text-[#111111] group-hover:text-[#FF5722] min-w-0">
                              <FolderGit2 className="w-4 h-4 shrink-0" />
                              <span className="truncate">{repo.name}</span>
                            </div>
                            <span className="px-2 py-0.5 bg-white border-2 border-[#111111] font-mono-code text-[10px] font-extrabold shrink-0">
                              {repo.fork ? 'FORK' : 'SOURCE'}
                            </span>
                          </div>

                          {repo.description ? (
                            <p className="text-xs font-semibold text-zinc-800 mt-2.5 leading-relaxed break-words">
                              {repo.description}
                            </p>
                          ) : (
                            <p className="text-xs italic text-zinc-500 mt-2.5 break-words">
                              Repository reale su github.com/{githubState.resolvedUsername}/
                              {repo.name}
                            </p>
                          )}

                          {Array.isArray(repo.topics) && repo.topics.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-3">
                              {repo.topics.slice(0, 4).map((t) => (
                                <span
                                  key={t}
                                  className="px-2 py-0.5 bg-white border border-[#111111] font-mono-code text-[10px] font-bold truncate max-w-[120px]"
                                >
                                  #{t}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        <div className="mt-4 pt-3 border-t-2 border-dashed border-[#111111] flex flex-wrap items-center justify-between gap-2 font-mono-code text-[11px] font-extrabold">
                          <div className="flex items-center gap-2 min-w-0">
                            <span
                              style={{ backgroundColor: langColor }}
                              className="w-3 h-3 rounded-full border border-[#111111] shrink-0 inline-block"
                            />
                            <span className="truncate">{repo.language || 'Code'}</span>
                          </div>

                          <div className="flex items-center gap-3 shrink-0">
                            <span className="inline-flex items-center gap-1" title="Stars">
                              <Star className="w-3.5 h-3.5 fill-[#FFE600] shrink-0" />
                              {repo.stargazers_count || 0}
                            </span>
                            <span className="inline-flex items-center gap-1" title="Forks">
                              <GitFork className="w-3.5 h-3.5 shrink-0" />
                            </span>
                            <span className="text-[10px] text-zinc-600">{updatedDate}</span>
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Full-width founder biography */}
            <div className="w-full">
              <div className="bg-[#FFE600] brutal-card-lg h-auto p-5 sm:p-6 space-y-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#111111] text-[#FFE600] border-3 border-[#111111] flex flex-col items-center justify-center font-mono-code font-extrabold shrink-0">
                    <span className="text-base sm:text-lg leading-none">MG</span>
                    <span className="text-[8px] sm:text-[9px] text-[#00F5D4] mt-0.5">2008</span>
                  </div>
                  <div className="min-w-0">
                    <span className="px-2 py-0.5 bg-white border border-[#111111] font-mono-code text-[10px] font-extrabold">
                      FOUNDER & DEV
                    </span>
                    <h3 className="font-display font-extrabold text-lg sm:text-xl uppercase mt-0.5 truncate">
                      Mattia Gabellieri
                    </h3>
                    <p className="font-mono-code text-[11px] sm:text-xs font-bold text-zinc-800 truncate">
                      Web, Cloud & Mobile Store Developer
                    </p>
                  </div>
                </div>

                <div className="h-auto w-full max-w-5xl mx-auto bg-white p-6 border-4 border-[#111111] shadow-[4px_4px_0px_#111111] space-y-4 text-xs sm:text-sm font-bold text-zinc-900 leading-relaxed break-words">
                  <p>
                    Sviluppatore Full-Stack di 18 anni e studente dell&apos;ultimo anno all&apos;ITIS
                    Enrico Mattei (indirizzo Informatica). Spinto da una forte visione
                    d&apos;impresa, il mio obiettivo è fornire sempre il miglior prodotto finale,
                    affiancando il cliente in un percorso completo: dall&apos;ideazione del
                    progetto, alla progettazione del database (backend), fino allo sviluppo
                    dell&apos;interfaccia utente (frontend) e alla consegna del software finito.
                  </p>
                  <p>
                    Ogni tecnologia che utilizzo è uno strumento scelto per garantire
                    prestazioni e scalabilità. Sviluppo interfacce fluide con Next.js,
                    TypeScript e Tailwind CSS e strutturo backend solidi con Google Cloud
                    Platform e Firebase Data Connect. Curo inoltre l&apos;intera infrastruttura
                    di rilascio: dal deploy su Vercel e le email transazionali con Resend, fino
                    alla configurazione di domini web personalizzati su misura per il cliente.
                  </p>
                  <p>
                    Questo approccio mi permette di trasformare problemi di business in
                    soluzioni reali e pronte per il Web, l&apos;App Store e Google Play. Un metodo
                    che ho applicato anche ideando e sviluppando Trimmy, un gestionale cloud
                    completo per saloni e beauty center.
                  </p>
                </div>
              </div>
            </div>

            {/* Social cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#38BDF8] brutal-card p-5 sm:p-6 hover:-translate-y-1 transition-transform"
              >
                <div className="flex items-center justify-between mb-2 gap-2">
                  <span className="px-2.5 py-0.5 bg-[#111111] text-white font-mono-code text-[10px] font-extrabold uppercase truncate">
                    LINKEDIN UFFICIALE
                  </span>
                  <Linkedin className="w-6 h-6 shrink-0" />
                </div>
                <h4 className="font-display font-extrabold text-lg sm:text-xl uppercase break-words">
                  Connettiti su LinkedIn
                </h4>
                <p className="text-xs font-bold text-zinc-900 mt-1 break-words">
                  Per aziende tech, startup, agenzie e collaborazioni B2B.
                </p>
                <div className="mt-4 inline-flex items-center gap-1.5 font-mono-code text-xs font-extrabold bg-white px-3 py-1.5 border-2 border-[#111111]">
                  <span>APRI PROFILO LINKEDIN</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </div>
              </a>

              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#FF90E8] brutal-card p-5 sm:p-6 hover:-translate-y-1 transition-transform"
              >
                <div className="flex items-center justify-between mb-2 gap-2">
                  <span className="px-2.5 py-0.5 bg-[#111111] text-white font-mono-code text-[10px] font-extrabold uppercase truncate">
                    INSTAGRAM UFFICIALE
                  </span>
                  <Instagram className="w-6 h-6 shrink-0" />
                </div>
                <h4 className="font-display font-extrabold text-lg sm:text-xl break-words">
                  {socialLinks.instagramHandle}
                </h4>
                <p className="text-xs font-bold text-zinc-900 mt-1 break-words">
                  Dietro le quinte dei progetti, aggiornamenti su Trimmy e percorso imprenditoriale.
                </p>
                <div className="mt-4 inline-flex items-center gap-1.5 font-mono-code text-xs font-extrabold bg-white px-3 py-1.5 border-2 border-[#111111]">
                  <span>SEGUIMI SU INSTAGRAM</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* ====================================================================
            SECTION 04: 5-STEP INTERACTIVE PROJECT CONFIGURATOR (RESEND API)
           ==================================================================== */}
        <section ref={configuratorRef} className="space-y-6">
          <div>
            <span className="px-3 py-1 bg-[#111111] text-[#FFE600] font-mono-code font-extrabold text-xs uppercase inline-block">
              04 // CONFIGURATORE PROGETTO A 5 STEP (INVIO DIRETTO A RESEND / GMAIL)
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl uppercase mt-3 break-words">
              Costruisci la Proposta Perfetta per le tue Esigenze.
            </h2>
            <p className="text-xs sm:text-base font-semibold text-zinc-800 mt-1 break-words">
              Seleziona con cura le opzioni in ogni step (non puoi procedere se lo step attivo non è completo). La richiesta sarà recapitata direttamente a:{' '}
              <span className="font-mono-code font-extrabold underline break-all">{socialLinks.email}</span> tramite le API di <strong>Resend</strong>.
            </p>
          </div>

          <div className="bg-white brutal-card-lg p-4 sm:p-10 space-y-8 overflow-hidden">
            {/* 5-Step Progress Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 font-mono-code text-[11px] sm:text-xs font-extrabold">
              {[
                { step: 1, label: '1. OBIETTIVO' },
                { step: 2, label: '2. PIATTAFORME' },
                { step: 3, label: '3. BUDGET' },
                { step: 4, label: '4. MODULI' },
                { step: 5, label: '5. CONTATTI & INVIO' }
              ].map((s) => {
                const isCompleted = currentStep > s.step;
                const isCurrent = currentStep === s.step;
                return (
                  <button
                    key={s.step}
                    type="button"
                    onClick={() => validateStepAndProceed(s.step)}
                    className={`p-2.5 sm:p-3 border-3 border-[#111111] text-left transition-all flex items-center justify-between ${
                      isCurrent
                        ? 'bg-[#FFE600] shadow-[4px_4px_0px_#111111]'
                        : isCompleted
                        ? 'bg-[#A3E635] cursor-pointer'
                        : 'bg-[#F7F4EB] opacity-75 cursor-not-allowed'
                    }`}
                  >
                    <span className="truncate">{s.label}</span>
                    {isCompleted && <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 ml-1" />}
                  </button>
                );
              })}
            </div>

            {formError && (
              <div className="p-4 bg-[#FF5722] text-white border-3 border-[#111111] shadow-[4px_4px_0px_#111111] font-mono-code text-xs font-extrabold flex items-start gap-2">
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <span className="break-words">{formError}</span>
              </div>
            )}

            {/* STEP 1: CLIENT PROFILE & PROJECT TYPE */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="space-y-3">
                  <label className="block font-display font-extrabold text-sm sm:text-lg uppercase text-[#111111] leading-snug">
                    1. Qual è il tuo profilo o la tua realtà aziendale? <span className="text-[#FF5722]">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {[
                      {
                        title: 'Imprenditore / Attività Commerciale',
                        desc: 'Salone, negozio, ristorante, studio o PMI che vuole digitalizzarsi'
                      },
                      {
                        title: 'Startup / Founder',
                        desc: 'Hai un’idea innovativa e vuoi lanciare un MVP o prodotto SaaS/Mobile'
                      },
                      {
                        title: 'Azienda Tech / Software House / Agenzia',
                        desc: 'Cerchi uno sviluppatore Full-Stack / Mobile per un progetto o team'
                      },
                      {
                        title: 'Libero Professionista / Creator',
                        desc: 'Vuoi una piattaforma web, app proprietaria o sistema di prenotazione'
                      },
                      {
                        title: 'Altro (Specifica)',
                        desc: 'Descrivi liberamente chi sei o la tua realtà'
                      }
                    ].map((item) => {
                      const selected = formData.clientProfile === item.title;
                      return (
                        <button
                          key={item.title}
                          type="button"
                          onClick={() => {
                            setFormData((prev) => ({ ...prev, clientProfile: item.title }));
                            setFormError('');
                          }}
                          className={`p-4 border-3 border-[#111111] text-left cursor-pointer transition-all flex flex-col justify-between ${
                            selected
                              ? 'bg-[#FFE600] shadow-[4px_4px_0px_#111111] -translate-y-0.5'
                              : 'bg-[#F7F4EB] hover:bg-white'
                          }`}
                        >
                          <div className="font-mono-code text-xs font-extrabold uppercase flex items-center justify-between gap-2">
                            <span className="break-words">{item.title}</span>
                            {selected && <CheckCircle2 className="w-4 h-4 shrink-0" />}
                          </div>
                          <p className="text-[11px] font-semibold text-zinc-700 mt-1.5 break-words">
                            {item.desc}
                          </p>
                        </button>
                      );
                    })}
                  </div>

                  {formData.clientProfile === 'Altro (Specifica)' && (
                    <input
                      type="text"
                      value={formData.customClientProfile}
                      onChange={(e) => {
                        setFormData((prev) => ({ ...prev, customClientProfile: e.target.value }));
                        setFormError('');
                      }}
                      placeholder="Specifica qui il tuo profilo (es. Associazione, Ente, Privato...)"
                      className="w-full p-3.5 bg-white border-3 border-[#111111] font-mono-code text-xs font-bold mt-2"
                    />
                  )}
                </div>

                <div className="space-y-3 pt-4">
                  <label className="block font-display font-extrabold text-sm sm:text-lg uppercase text-[#111111] leading-snug">
                    2. Che tipo di soluzione principale desideri realizzare? <span className="text-[#FF5722]">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      {
                        title: 'Ecosistema Completo (Web Cloud + App iOS & Android)',
                        desc: 'Piattaforma gestionale web + App pubblicata su App Store e Google Play'
                      },
                      {
                        title: 'Software Gestionale / Web App su Misura',
                        desc: 'Dashboard cloud per gestire clienti, appuntamenti, cassa o magazzino'
                      },
                      {
                        title: 'App Mobile Nativa iOS & Android (Store Ufficiali)',
                        desc: 'Applicazione per iPhone e Android pronta per il download sugli store'
                      },
                      {
                        title: 'Sviluppo MVP per Startup / SaaS Scalabile',
                        desc: 'Dal prototipo al prodotto pronto per il mercato e gli investitori'
                      },
                      {
                        title: 'Sito Web / Landing Page ad Alta Conversione',
                        desc: 'Presenza digitale veloce, moderna e progettata per acquisire clienti'
                      },
                      {
                        title: 'Progetto Personalizzato (Descrivi tu)',
                        desc: 'Hai un’esigenza specifica diversa? Scoprila o scrivila qui sotto'
                      }
                    ].map((item) => {
                      const selected = formData.projectType === item.title;
                      return (
                        <button
                          key={item.title}
                          type="button"
                          onClick={() => {
                            setFormData((prev) => ({ ...prev, projectType: item.title }));
                            setFormError('');
                          }}
                          className={`p-4 border-3 border-[#111111] text-left cursor-pointer transition-all flex flex-col justify-between ${
                            selected
                              ? 'bg-[#00F5D4] shadow-[4px_4px_0px_#111111] -translate-y-0.5'
                              : 'bg-[#F7F4EB] hover:bg-white'
                          }`}
                        >
                          <div className="font-mono-code text-xs font-extrabold uppercase flex items-center justify-between gap-2">
                            <span className="break-words">{item.title}</span>
                            {selected && <CheckCircle2 className="w-4 h-4 shrink-0" />}
                          </div>
                          <p className="text-[11px] font-semibold text-zinc-700 mt-1.5 break-words">
                            {item.desc}
                          </p>
                        </button>
                      );
                    })}
                  </div>

                  {formData.projectType === 'Progetto Personalizzato (Descrivi tu)' && (
                    <input
                      type="text"
                      value={formData.customProjectType}
                      onChange={(e) => {
                        setFormData((prev) => ({ ...prev, customProjectType: e.target.value }));
                        setFormError('');
                      }}
                      placeholder="Scrivi cosa vorresti realizzare (es. Automazione AI, Integrazione API, Restyling software...)"
                      className="w-full p-3.5 bg-white border-3 border-[#111111] font-mono-code text-xs font-bold mt-2"
                    />
                  )}
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    type="button"
                    disabled={
                      !formData.clientProfile ||
                      (formData.clientProfile === 'Altro (Specifica)' &&
                        !formData.customClientProfile.trim()) ||
                      !formData.projectType ||
                      (formData.projectType === 'Progetto Personalizzato (Descrivi tu)' &&
                        !formData.customProjectType.trim())
                    }
                    onClick={() => validateStepAndProceed(2)}
                    className="w-full sm:w-auto px-6 py-3.5 bg-[#111111] text-[#FFE600] brutal-btn font-mono-code font-extrabold text-xs uppercase flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>AVANTI ALLO STEP 2</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: TARGET PLATFORMS, STAGE & TIMELINE */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="space-y-3">
                  <label className="block font-display font-extrabold text-sm sm:text-lg uppercase text-[#111111] leading-snug">
                    1. Su quali piattaforme preferisci rilasciare il progetto? <span className="text-[#FF5722]">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      'Web Cloud + App iOS (App Store) + Android (Google Play)',
                      'Solo App Mobile (Apple App Store & Google Play Store)',
                      'Solo Piattaforma / Gestionale Web Cloud (Desktop & Mobile Browser)',
                      'Non sono sicuro: consigliami tu la scelta migliore per il mio caso'
                    ].map((plat) => (
                      <button
                        key={plat}
                        type="button"
                        onClick={() => {
                          setFormData((prev) => ({ ...prev, targetPlatforms: plat }));
                          setFormError('');
                        }}
                        className={`p-4 border-3 border-[#111111] font-mono-code text-xs font-extrabold text-left cursor-pointer flex items-center justify-between gap-2 ${
                          formData.targetPlatforms === plat
                            ? 'bg-[#FF90E8] shadow-[4px_4px_0px_#111111]'
                            : 'bg-[#F7F4EB] hover:bg-white'
                        }`}
                      >
                        <span className="break-words">{plat}</span>
                        {formData.targetPlatforms === plat && (
                          <CheckCircle2 className="w-4 h-4 shrink-0" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 pt-3">
                  <label className="block font-display font-extrabold text-sm sm:text-lg uppercase text-[#111111] leading-snug">
                    2. A che punto ti trovi con lo sviluppo del progetto? <span className="text-[#FF5722]">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "Parto da zero: ho l'idea e voglio strutturarla insieme a te",
                      'Ho già bozze, requisiti o design e cerco chi sviluppi tutto',
                      'Ho già un’attività/software avviato e voglio modernizzarlo o creare l’App',
                      'Cerco un partner tecnico continuativo per il mio team/azienda'
                    ].map((stage) => (
                      <button
                        key={stage}
                        type="button"
                        onClick={() => {
                          setFormData((prev) => ({ ...prev, projectStage: stage }));
                          setFormError('');
                        }}
                        className={`p-3.5 border-3 border-[#111111] font-mono-code text-xs font-extrabold text-left cursor-pointer flex items-center justify-between gap-2 ${
                          formData.projectStage === stage
                            ? 'bg-[#FFE600] shadow-[4px_4px_0px_#111111]'
                            : 'bg-[#F7F4EB] hover:bg-white'
                        }`}
                      >
                        <span className="break-words">{stage}</span>
                        {formData.projectStage === stage && (
                          <CheckCircle2 className="w-4 h-4 shrink-0" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 pt-3">
                  <label className="block font-display font-extrabold text-sm sm:text-lg uppercase text-[#111111] leading-snug">
                    3. Quali sono le tempistiche ideali previste? <span className="text-[#FF5722]">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      'Urgente / MVP Rapido (2 - 4 settimane)',
                      'Tempistica Standard (1 - 3 mesi)',
                      'Flessibile / Pianifichiamo insieme gli step'
                    ].map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => {
                          setFormData((prev) => ({ ...prev, timeline: time }));
                          setFormError('');
                        }}
                        className={`p-3.5 border-3 border-[#111111] font-mono-code text-xs font-extrabold text-left cursor-pointer flex items-center justify-between gap-2 ${
                          formData.timeline === time
                            ? 'bg-[#00F5D4] shadow-[3px_3px_0px_#111111]'
                            : 'bg-[#F7F4EB] hover:bg-white'
                        }`}
                      >
                        <span className="break-words">{time}</span>
                        {formData.timeline === time && (
                          <CheckCircle2 className="w-4 h-4 shrink-0" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => validateStepAndProceed(1)}
                    className="w-full sm:w-auto px-5 py-3 bg-white brutal-btn font-mono-code font-extrabold text-xs uppercase flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>INDIETRO</span>
                  </button>
                  <button
                    type="button"
                    disabled={!formData.targetPlatforms || !formData.projectStage || !formData.timeline}
                    onClick={() => validateStepAndProceed(3)}
                    className="w-full sm:w-auto px-6 py-3.5 bg-[#111111] text-[#FFE600] brutal-btn font-mono-code font-extrabold text-xs uppercase flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>AVANTI ALLO STEP 3 (BUDGET)</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: DEDICATED BUDGET & INVESTMENT STEP */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="p-4 bg-[#FFE600] border-3 border-[#111111] shadow-[4px_4px_0px_#111111] space-y-2">
                  <span className="px-2 py-0.5 bg-[#111111] text-[#FFE600] font-mono-code text-[10px] font-extrabold uppercase">
                    SEZIONE DEDICATA
                  </span>
                  <h3 className="font-display font-extrabold text-lg sm:text-xl uppercase break-words">
                    Fascia di Budget & Investimento Previsto
                  </h3>
                  <p className="text-xs font-semibold text-zinc-900 leading-relaxed break-words">
                    Definire chiaramente il budget o la modalità di investimento aiuta a dimensionare correttamente le funzionalità dell&apos;MVP o dell&apos;ecosistema completo senza perdite di tempo.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <label className="block font-display font-extrabold text-sm sm:text-lg uppercase text-[#111111] leading-snug">
                    1. Qual è la fascia di budget stimata per il progetto? <span className="text-[#FF5722]">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { tier: '< 1.000€', desc: 'Ideale per landing page avanzate, piccoli restyling o MVP essenziali' },
                      { tier: '1.000€ - 3.000€', desc: 'Per Web App mirate, gestionali specifici o prime release App Store / Google Play' },
                      { tier: '3.000€ - 5.000€', desc: 'Per ecosistemi completi con database relazionali, API e sincronizzazione real-time' },
                      { tier: '+ 5.000€', desc: 'Per prodotti SaaS strutturati, piattaforme complesse o partnership a lungo termine' }
                    ].map((item) => {
                      const selected = formData.budgetTier === item.tier;
                      return (
                        <button
                          key={item.tier}
                          type="button"
                          onClick={() => {
                            setFormData((prev) => ({ ...prev, budgetTier: item.tier }));
                            setFormError('');
                          }}
                          className={`p-4 sm:p-5 border-3 border-[#111111] text-left cursor-pointer transition-all flex flex-col justify-between ${
                            selected
                              ? 'bg-[#A3E635] shadow-[4px_4px_0px_#111111] -translate-y-0.5'
                              : 'bg-[#F7F4EB] hover:bg-white'
                          }`}
                        >
                          <div className="flex items-center justify-between font-display font-extrabold text-lg sm:text-xl gap-2">
                            <span className="break-words">{item.tier}</span>
                            {selected && <CheckCircle2 className="w-5 h-5 shrink-0" />}
                          </div>
                          <p className="text-xs font-semibold text-zinc-800 mt-2 leading-relaxed break-words">
                            {item.desc}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-3 pt-4">
                  <label className="block font-display font-extrabold text-sm sm:text-lg uppercase text-[#111111] leading-snug">
                    2. Quale formula di collaborazione o pagamento preferisci? <span className="text-[#FF5722]">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      'Progetto Chiavi in Mano a prezzo fisso concordato',
                      'Sviluppo a Step (partiamo da un MVP essenziale)',
                      'Abbonamento Mensile / Canone Software (stile SaaS Trimmy)',
                      'Collaborazione a Giornate / Supporto Continuativo o da valutare in call'
                    ].map((mode) => (
                      <button
                        key={mode}
                        type="button"
                        onClick={() => {
                          setFormData((prev) => ({ ...prev, collaborationMode: mode }));
                          setFormError('');
                        }}
                        className={`p-3.5 border-3 border-[#111111] font-mono-code text-xs font-extrabold text-left cursor-pointer flex items-center justify-between gap-2 ${
                          formData.collaborationMode === mode
                            ? 'bg-[#00F5D4] shadow-[4px_4px_0px_#111111]'
                            : 'bg-[#F7F4EB] hover:bg-white'
                        }`}
                      >
                        <span className="break-words">{mode}</span>
                        {formData.collaborationMode === mode && (
                          <CheckCircle2 className="w-4 h-4 shrink-0" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => validateStepAndProceed(2)}
                    className="w-full sm:w-auto px-5 py-3 bg-white brutal-btn font-mono-code font-extrabold text-xs uppercase flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>INDIETRO</span>
                  </button>
                  <button
                    type="button"
                    disabled={!formData.budgetTier || !formData.collaborationMode}
                    onClick={() => validateStepAndProceed(4)}
                    className="w-full sm:w-auto px-6 py-3.5 bg-[#111111] text-[#FFE600] brutal-btn font-mono-code font-extrabold text-xs uppercase flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>AVANTI ALLO STEP 4 (MODULI)</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: MODULES & CUSTOM FEATURES */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <label className="block font-display font-extrabold text-sm sm:text-lg uppercase text-[#111111] leading-snug">
                      1. Seleziona le funzionalità o moduli necessari (Min. 1) <span className="text-[#FF5722]">*</span>
                    </label>
                    <span className="font-mono-code text-xs font-extrabold px-2.5 py-1 bg-[#FFE600] border-2 border-[#111111] self-start sm:self-auto">
                      {formData.selectedFeatures.length} scelte attive
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      'Pubblicazione su Apple App Store & Google Play',
                      'Dashboard & Gestione Cloud su Misura',
                      'Database SQL & Sincronizzazione Real-Time',
                      'Notifiche Push su iOS & Android',
                      'Prenotazioni / Calendario / Appuntamenti',
                      'Pagamenti Online / Cassa & Report KPI',
                      'Area Clienti, Login & Ruoli Staff',
                      'Fidelity Card / QR Code / Punti',
                      'Integrazione AI / Automazioni Aziendali',
                      'Voglio farmi consigliare da te in base al progetto'
                    ].map((feat) => {
                      const active = formData.selectedFeatures.includes(feat);
                      return (
                        <button
                          key={feat}
                          type="button"
                          onClick={() => {
                            toggleFeatureTag(feat);
                            setFormError('');
                          }}
                          className={`p-3.5 border-3 border-[#111111] font-mono-code text-xs font-extrabold text-left flex items-center justify-between gap-2 cursor-pointer ${
                            active
                              ? 'bg-[#A3E635] shadow-[3px_3px_0px_#111111]'
                              : 'bg-[#F7F4EB] hover:bg-white'
                          }`}
                        >
                          <span className="break-words">{feat}</span>
                          {active && <CheckSquare className="w-4 h-4 shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="p-4 bg-[#F7F4EB] border-3 border-[#111111] space-y-2">
                  <label className="block font-mono-code text-xs font-extrabold uppercase">
                    HAI UN&apos;ESIGENZA SPECIFICA NON IN ELENCO? AGGIUNGILA QUI:
                  </label>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="text"
                      value={formData.customFeatureInput}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, customFeatureInput: e.target.value }))
                      }
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          handleAddCustomFeature();
                        }
                      }}
                      placeholder="Es. Gestione turni barbieri, Fatturazione..."
                      className="flex-1 p-3 bg-white border-2 border-[#111111] font-mono-code text-xs font-bold min-w-0"
                    />
                    <button
                      type="button"
                      onClick={handleAddCustomFeature}
                      className="px-4 py-3 bg-[#FFE600] border-2 border-[#111111] shadow-[3px_3px_0px_#111111] font-mono-code font-extrabold text-xs uppercase flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
                    >
                      <Plus className="w-4 h-4 shrink-0" />
                      <span>AGGIUNGI</span>
                    </button>
                  </div>

                  {formData.selectedFeatures.length > 0 && (
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {formData.selectedFeatures.map((f) => (
                        <span
                          key={f}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              toggleFeatureTag(f);
                            }
                          }}
                          onClick={() => toggleFeatureTag(f)}
                          className="px-2.5 py-1 bg-white border-2 border-[#111111] font-mono-code text-[11px] font-extrabold inline-flex items-center gap-1.5 cursor-pointer hover:bg-[#FF90E8] max-w-full truncate"
                          title="Clicca per rimuovere"
                        >
                          <span className="truncate">{f}</span>
                          <X className="w-3 h-3 shrink-0" />
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row justify-between gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => validateStepAndProceed(3)}
                    className="w-full sm:w-auto px-5 py-3 bg-white brutal-btn font-mono-code font-extrabold text-xs uppercase flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>INDIETRO</span>
                  </button>
                  <button
                    type="button"
                    disabled={formData.selectedFeatures.length === 0}
                    onClick={() => validateStepAndProceed(5)}
                    className="w-full sm:w-auto px-6 py-3.5 bg-[#111111] text-[#FFE600] brutal-btn font-mono-code font-extrabold text-xs uppercase flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>AVANTI ALLO STEP 5 (CONTATTI)</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 5: CONTACT DETAILS & RESEND API DISPATCH */}
            {currentStep === 5 && (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                {submitStatus === 'idle' || submitStatus === 'submitting' ? (
                  <>
                    <div className="p-4 bg-[#FFE600] border-3 border-[#111111] font-mono-code text-xs space-y-1 overflow-hidden">
                      <div className="font-extrabold uppercase">
                        RIEPILOGO CONFIGURAZIONE PROGETTO:
                      </div>
                      <div className="break-words">
                        • <strong>Profilo:</strong> {getEffectiveClientProfile()} |{' '}
                        <strong>Soluzione:</strong> {getEffectiveProjectType()}
                      </div>
                      <div className="break-words">
                        • <strong>Budget:</strong> {formData.budgetTier} |{' '}
                        <strong>Piattaforme:</strong> {formData.targetPlatforms}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-display font-extrabold text-xs sm:text-sm uppercase text-[#111111] mb-1">
                          Nome e Cognome <span className="text-[#FF5722]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, fullName: e.target.value }))
                          }
                          placeholder="Es. Marco Rossi"
                          className="w-full p-3.5 bg-[#F7F4EB] border-3 border-[#111111] font-mono-code text-xs font-bold"
                        />
                      </div>

                      <div>
                        <label className="block font-display font-extrabold text-xs sm:text-sm uppercase text-[#111111] mb-1">
                          Azienda / Attività / Startup (Opzionale)
                        </label>
                        <input
                          type="text"
                          value={formData.companyName}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, companyName: e.target.value }))
                          }
                          placeholder="Es. Salone Rossi / Tech Srl"
                          className="w-full p-3.5 bg-[#F7F4EB] border-3 border-[#111111] font-mono-code text-xs font-bold"
                        />
                      </div>

                      <div>
                        <label className="block font-display font-extrabold text-xs sm:text-sm uppercase text-[#111111] mb-1">
                          La tua Email <span className="text-[#FF5722]">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, email: e.target.value }))
                          }
                          placeholder="nome@azienda.it"
                          className="w-full p-3.5 bg-[#F7F4EB] border-3 border-[#111111] font-mono-code text-xs font-bold"
                        />
                      </div>

                      <div>
                        <label className="block font-display font-extrabold text-xs sm:text-sm uppercase text-[#111111] mb-1">
                          Telefono / WhatsApp (Consigliato)
                        </label>
                        <input
                          type="text"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, phone: e.target.value }))
                          }
                          placeholder="+39 333 ..."
                          className="w-full p-3.5 bg-[#F7F4EB] border-3 border-[#111111] font-mono-code text-xs font-bold"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block font-display font-extrabold text-xs sm:text-sm uppercase text-[#111111]">
                        Come preferisci essere ricontattato?
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {[
                          'Email',
                          'WhatsApp / Telefono',
                          'Video Call (Google Meet)',
                          'Indifferente'
                        ].map((method) => (
                          <button
                            key={method}
                            type="button"
                            onClick={() =>
                              setFormData((prev) => ({ ...prev, preferredContactMethod: method }))
                            }
                            className={`p-2.5 border-2 border-[#111111] font-mono-code text-[11px] sm:text-xs font-extrabold cursor-pointer text-center truncate ${
                              formData.preferredContactMethod === method
                                ? 'bg-[#00F5D4] shadow-[2px_2px_0px_#111111]'
                                : 'bg-[#F7F4EB]'
                            }`}
                          >
                            <span className="truncate">{method}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block font-display font-extrabold text-xs sm:text-sm uppercase text-[#111111] mb-1">
                        Descrivi il tuo progetto o obiettivo <span className="text-[#FF5722]">*</span>
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.description}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, description: e.target.value }))
                        }
                        placeholder="Raccontami cosa vuoi realizzare, che problema vuoi risolvere o come possiamo collaborare..."
                        className="w-full p-3.5 bg-[#F7F4EB] border-3 border-[#111111] font-mono-code text-xs font-bold"
                      />
                    </div>

                    <div className="flex items-start gap-3 border-2 border-[#111111] bg-[#F7F4EB] p-3.5">
                      <input
                        id="privacy-accepted"
                        type="checkbox"
                        required
                        checked={privacyAccepted}
                        onChange={(e) => {
                          setPrivacyAccepted(e.target.checked);
                          if (e.target.checked) setFormError('');
                        }}
                        className="mt-0.5 h-5 w-5 shrink-0 accent-[#111111]"
                      />
                      <label
                        htmlFor="privacy-accepted"
                        className="font-mono-code text-xs font-bold leading-relaxed"
                      >
                        Ho letto e accetto la{' '}
                        <Link
                          href="/privacy"
                          className="font-extrabold underline underline-offset-2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Privacy Policy
                        </Link>{' '}
                        per la gestione della richiesta di contatto.
                      </label>
                    </div>

                    <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-between gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => validateStepAndProceed(4)}
                        className="w-full sm:w-auto px-5 py-3 bg-white brutal-btn font-mono-code font-extrabold text-xs uppercase flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span>INDIETRO</span>
                      </button>

                      <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
                        <a
                          href={getGmailComposeLink()}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => {
                            if (
                              !privacyAccepted ||
                              !formData.fullName.trim() ||
                              !formData.email.trim() ||
                              !formData.description.trim()
                            ) {
                              e.preventDefault();
                              setFormError(
                                !privacyAccepted
                                  ? 'Leggi e accetta la Privacy Policy prima di inviare la richiesta.'
                                  : 'Compila Nome, Email e Descrizione prima di aprire Gmail!'
                              );
                            }
                          }}
                          className="w-full sm:w-auto px-5 py-3.5 sm:py-4 bg-[#FFE600] text-[#111111] brutal-btn font-mono-code font-extrabold text-xs uppercase flex items-center justify-center gap-2 text-center"
                        >
                          <Mail className="w-4 h-4 shrink-0" />
                          <span>APRI IN GMAIL WEB</span>
                        </a>

                        <button
                          type="submit"
                          disabled={
                            submitStatus === 'submitting' ||
                            !privacyAccepted ||
                            !formData.fullName.trim() ||
                            !formData.email.trim() ||
                            !formData.description.trim()
                          }
                          className="w-full sm:w-auto px-6 py-3.5 sm:py-4 bg-[#FF5722] text-white brutal-btn font-mono-code font-extrabold text-xs sm:text-sm uppercase flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-center"
                        >
                          <Send className="w-4 h-4 shrink-0" />
                          <span className="truncate">
                            {submitStatus === 'submitting'
                              ? 'INVIO IN CORSO...'
                              : 'INVIA PROPOSTA'}
                          </span>
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div
                    className={`p-5 sm:p-6 border-3 border-[#111111] shadow-[6px_6px_0px_#111111] space-y-4 ${
                      submitStatus === 'success'
                        ? 'bg-[#A3E635]'
                        : 'bg-[#FF5722] text-white'
                    }`}
                    role="status"
                    aria-live="polite"
                  >
                    <div className="flex items-center gap-2 font-display font-extrabold text-lg sm:text-2xl uppercase">
                      {submitStatus === 'success' ? (
                        <CheckCircle2 className="w-7 h-7 shrink-0" />
                      ) : (
                        <AlertCircle className="w-7 h-7 shrink-0" />
                      )}
                      <span className="break-words">
                        {submitStatus === 'success'
                          ? 'Richiesta presa in carico per l’invio'
                          : 'Invio automatico non riuscito'}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm font-bold text-zinc-900 break-words">
                      {submitStatus === 'success' ? (
                        <>
                          Resend ha accettato la richiesta per l’invio a{' '}
                          <strong className="break-all">{socialLinks.email}</strong>.
                          Se non la trovi, controlla anche la cartella spam.
                        </>
                      ) : (
                        <>
                          {submitError} La scheda non è stata inviata automaticamente.
                          Puoi inviarla tramite Gmail oppure copiare il riepilogo.
                        </>
                      )}
                    </p>
                    <div className="flex flex-wrap gap-3 font-mono-code text-xs font-extrabold">
                      <a
                        href={getGmailComposeLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-4 py-3 bg-[#111111] text-[#FFE600] brutal-btn flex items-center justify-center gap-2 text-center"
                      >
                        <Mail className="w-4 h-4 shrink-0" />
                        <span>APRI ORA TRAMITE GMAIL WEB</span>
                      </a>
                      <button
                        type="button"
                        onClick={handleCopyBrief}
                        className="w-full sm:w-auto px-4 py-3 bg-[#FFE600] text-[#111111] brutal-btn flex items-center justify-center gap-2 cursor-pointer text-center"
                      >
                        {copiedBrief ? <Check className="w-4 h-4 shrink-0" /> : <Copy className="w-4 h-4 shrink-0" />}
                        <span>{copiedBrief ? 'SCHEDA COPIATA!' : 'COPIA RIEPILOGO'}</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setSubmitStatus('idle')}
                        className="w-full sm:w-auto px-4 py-3 bg-white text-[#111111] brutal-btn cursor-pointer text-center"
                      >
                        MODIFICA DATI
                      </button>
                    </div>
                  </div>
                )}
              </form>
            )}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 bg-[#111111] text-white border-t-4 border-[#111111] mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 flex flex-col md:flex-row items-center justify-between gap-4 font-mono-code text-xs text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <span className="px-2.5 py-1 bg-[#FFE600] text-[#111111] font-extrabold shrink-0">MG</span>
            <span className="break-words">
              © {currentYear ? `${currentYear} ` : ''}Mattia Gabellieri • Full-Stack Web & Mobile Store
              Developer
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 sm:gap-4 font-extrabold">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="text-[#FFE600] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5 shrink-0" />
              <span className="break-all">
                {copiedEmail ? 'Email Copiata!' : socialLinks.email}
              </span>
            </button>
            <Link href="/privacy" className="text-white hover:underline">
              Privacy Policy
            </Link>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A3E635] hover:underline"
            >
              GitHub
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00F5D4] hover:underline"
            >
              LinkedIn
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF90E8] hover:underline"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}