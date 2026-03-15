import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { revealVariants, viewportConfig } from '../hooks/useScrollReveal'

const photos = [
  '/photos/IMG_0638.jpg',
  '/photos/IMG_1076.jpg',
  '/photos/IMG_1831.jpg',
  '/photos/IMG_3098.jpg',
  '/photos/IMG_4100.jpg',
  '/photos/IMG_4576.jpg',
  '/photos/IMG_4641.jpg',
  '/photos/IMG_5926.jpg',
  '/photos/IMG_6119.jpg',
  '/photos/IMG_6503.jpg',
  '/photos/IMG_6803.jpg',
  '/photos/IMG_7235.jpg',
  '/photos/IMG_7385.jpg',
  '/photos/IMG_7633.jpg',
  '/photos/IMG_7779.jpg',
]

export default function PhotoGallery() {
  const [selected, setSelected] = useState(null)

  const openPhoto = (i) => setSelected(i)
  const closePhoto = () => setSelected(null)
  const prev = () => setSelected((s) => (s - 1 + photos.length) % photos.length)
  const next = () => setSelected((s) => (s + 1) % photos.length)

  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-amber-500/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={viewportConfig} className="flex items-center gap-4 mb-6">
          <span className="font-mono text-xs text-amber-400 tracking-widest uppercase">Gallery</span>
          <div className="flex-1 h-px bg-gradient-to-r from-amber-500/30 to-transparent" />
        </motion.div>

        <motion.h2 variants={revealVariants} custom={100} initial="hidden" whileInView="visible" viewport={viewportConfig} className="font-syne font-bold text-4xl md:text-5xl text-white mb-4">
          Beyond <span className="gold-text">The Code</span>
        </motion.h2>
        <motion.p variants={revealVariants} custom={200} initial="hidden" whileInView="visible" viewport={viewportConfig} className="font-dm text-white/40 mb-12 max-w-xl text-[15px]">
          Moments, milestones, and the person behind the engineer.
        </motion.p>

        {/* Masonry-style grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {photos.map((src, i) => (
            <motion.div
              key={src}
              variants={revealVariants}
              custom={250 + i * 60}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="break-inside-avoid cursor-pointer group relative rounded-xl overflow-hidden"
              onClick={() => openPhoto(i)}
            >
              <img
                src={src}
                alt={`Photo ${i + 1}`}
                loading="lazy"
                className="w-full rounded-xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center"
            onClick={closePhoto}
          >
            {/* Close */}
            <button onClick={closePhoto} className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-10">
              <X size={24} />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="absolute left-4 md:left-8 text-white/30 hover:text-white transition-colors z-10"
            >
              <ChevronLeft size={36} />
            </button>

            {/* Image */}
            <motion.img
              key={selected}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              src={photos[selected]}
              alt={`Photo ${selected + 1}`}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute right-4 md:right-8 text-white/30 hover:text-white transition-colors z-10"
            >
              <ChevronRight size={36} />
            </button>

            {/* Counter */}
            <div className="absolute bottom-6 font-mono text-xs text-white/30">
              {selected + 1} / {photos.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
