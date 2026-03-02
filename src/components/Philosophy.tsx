'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
    const containerRef = useRef<HTMLDivElement>(null);
    const qRef = useRef<HTMLHeadingElement>(null);
    const aRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 60%",
                    end: "bottom 80%",
                    scrub: 1 // Links animation progress directly to scrollbar smoothly
                }
            });

            // We'll simulate a split text reveal using clipPath for a sleek scanner effect
            tl.fromTo(qRef.current,
                { clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)', opacity: 0 },
                { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', opacity: 1, duration: 1.2, ease: "power4.inOut" }
            )
                .fromTo(aRef.current,
                    { clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)', opacity: 0 },
                    { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', opacity: 1, duration: 1.2, ease: "power4.inOut" },
                    "-=0.6"
                );

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-32 px-4 bg-slate-950 relative overflow-hidden border-t border-slate-900 border-b">

            {/* Background Grid Texture */}
            <div className="absolute inset-0 z-0 opacity-10"
                style={{ backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`, backgroundSize: '32px 32px' }}>
            </div>

            <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-start justify-center min-h-[40vh]">

                <div className="mb-12">
                    <span className="font-jetbrains-mono text-sm text-slate-500 uppercase tracking-widest block mb-4">
                        [THE CORE PRINCIPLE]
                    </span>
                    <h2 ref={qRef} className="text-4xl md:text-6xl font-outfit font-medium text-slate-400 leading-tight md:max-w-3xl">
                        Traditional analysis asks:<br />
                        <span className="italic">"What happened?"</span>
                    </h2>
                </div>

                <div className="self-end text-right border-r-4 border-blue-500 pr-6 md:pr-10 py-2">
                    <h2 ref={aRef} className="text-4xl md:text-7xl font-outfit font-bold text-white leading-tight">
                        We ask:<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                            "What are the fundamental limits?"
                        </span>
                    </h2>
                </div>

            </div>
        </section>
    );
}
