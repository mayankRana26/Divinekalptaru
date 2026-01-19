import { Phone, CheckCircle, Users, User, Activity, Heart, Shield, Sparkles } from 'lucide-react';

const Online = () => {
  const specializedAreas = [
    { name: "Chronic Back Pain", sub: "Lower & Upper back relief" },
    { name: "Cervical & Neck Pain", sub: "Relieve stiffness & tension" },
    { name: "Frozen Shoulder", sub: "Improve range of motion" },
    { name: "Sciatica Relief", sub: "Nerve decompression yoga" },
    { name: "Joint & Knee Health", sub: "Strengthening & mobility" },
    { name: "Stress & Anxiety", sub: "Mindfulness & breathwork" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6 font-sans">
      <div className="max-w-md w-full bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border-[6px] border-emerald-500">
        
        {/* Hero Section */}
        <div className="bg-emerald-600 p-10 text-center text-white relative">
          <div className="absolute top-4 right-6 bg-white text-emerald-700 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-md">
            Live Online Sessions
          </div>
          <Sparkles className="absolute top-10 left-10 text-emerald-300 opacity-30 w-12 h-12" />
          
          <h1 className="text-4xl font-black mb-2 leading-tight uppercase tracking-tight">
            Heal Your <br/>Body.
          </h1>
          <div className="h-1 w-16 bg-yellow-400 mx-auto mb-3 rounded-full"></div>
          <p className="text-emerald-50 text-sm font-medium opacity-90 italic">
            Therapeutic Yoga for Pain Management
          </p>
        </div>
        {/* Specialized Areas */}
        <div className="p-8 bg-white">
          <h2 className="text-center font-black text-gray-900 mb-6 text-xl uppercase tracking-wider">
            Expert Solutions For:
          </h2>
          
          <div className="grid grid-cols-1 gap-4">
            {specializedAreas.map((area, idx) => (
              <div key={idx} className="flex items-center space-x-4 group">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="text-emerald-600 w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 leading-none">{area.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">{area.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sessions Section */}
        <div className="px-8 flex gap-4 mb-8">
          <div className="flex-1 bg-slate-50 p-5 rounded-3xl border border-slate-200 text-center hover:bg-emerald-50 transition-colors">
            <User className="mx-auto text-emerald-600 mb-2 w-8 h-8" />
            <h3 className="font-black text-slate-800 text-xs uppercase">One-on-One</h3>
            <p className="text-[9px] text-slate-500 font-bold uppercase mt-1 tracking-widest">Personalized Care</p>
          </div>
          <div className="flex-1 bg-slate-50 p-5 rounded-3xl border border-slate-200 text-center hover:bg-emerald-50 transition-colors">
            <Users className="mx-auto text-emerald-600 mb-2 w-8 h-8" />
            <h3 className="font-black text-slate-800 text-xs uppercase">Group Class</h3>
            <p className="text-[9px] text-slate-500 font-bold uppercase mt-1 tracking-widest">Community Yoga</p>
          </div>
        </div>

        {/* Contact Footer */}
        <div className="bg-slate-900 p-8 text-center">
          <p className="text-yellow-400 font-black mb-4 uppercase tracking-[0.2em] text-xs">Book Your Free Trial</p>
          
          <div className="flex flex-col items-center">
            <a 
              href="tel:7535833208" 
              className="flex items-center justify-center bg-emerald-500 text-white w-full py-4 rounded-2xl text-2xl font-black shadow-[0_8px_0_rgb(5,150,105)] active:shadow-none active:translate-y-[4px] transition-all"
            >
              <Phone className="mr-3 fill-current w-6 h-6" />
              7535833208
            </a>
            <p className="text-slate-500 text-[10px] mt-8 font-bold uppercase tracking-widest leading-loose">
              Start Your Pain-Free Journey Today <br/>
              Expert Guidance • From Your Home
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Online;
