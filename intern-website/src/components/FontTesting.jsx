import React from 'react'

export const FontTesting = () => {
  return (
    <div>
        FontTesting
        <div className="p-8 space-y-6">
        {/* AvantGarde */}
        <section>
          <h2 className="h-heading text-2xl mb-2 text-brand-blue">
            AvantGarde tests
          </h2>

          <p className="h-heading text-lg" style={{ fontWeight: 400 }}>
            AvantGarde 400 (Book) – The quick brown fox jumps over the lazy dog.
          </p>
          <p className="h-heading text-lg" style={{ fontWeight: 500 }}>
            AvantGarde 500 (Medium) – The quick brown fox jumps over the lazy
            dog.
          </p>
          <p className="h-heading text-lg" style={{ fontWeight: 700 }}>
            AvantGarde 700 (Bold) – The quick brown fox jumps over the lazy dog.
          </p>
        </section>

        {/* AvenirNext */}
        <section>
          <h2 className="text-2xl mb-2 text-brand-blue">AvenirNext tests</h2>

          <p
            className="text-lg"
            style={{ fontFamily: "AvenirNext", fontWeight: 400 }}
          >
            AvenirNext 400 (Regular) – The quick brown fox jumps over the lazy
            dog.
          </p>
          <p
            className="text-lg"
            style={{ fontFamily: "AvenirNext", fontWeight: 500 }}
          >
            AvenirNext 500 (Medium) – The quick brown fox jumps over the lazy
            dog.
          </p>
          <p
            className="text-lg"
            style={{ fontFamily: "AvenirNext", fontWeight: 700 }}
          >
            AvenirNext 700 (Bold) – The quick brown fox jumps over the lazy dog.
          </p>
        </section>
      </div>
    </div>
  )
}
