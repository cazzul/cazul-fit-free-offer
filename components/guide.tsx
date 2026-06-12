import Image from "next/image"
import { DeficitGuide } from "@/components/deficit-guide"
import { Hero } from "@/components/hero"
import { GuideNav } from "@/components/guide-nav"
import { MacroCalculator } from "@/components/macro-calculator"
import { Reveal } from "@/components/reveal"
import {
  SectionBar,
  SectionKicker,
  Callout,
  DataTable,
  WideDataTable,
  PasoKicker,
} from "@/components/guide-ui"

const trainingPrinciples = [
  {
    title: "Rangos de reps",
    text: "Escoge un peso donde puedas hacer 6 reps y ve subiendo las reps semana a semana con ese mismo peso hasta llegar a 10. Cuando llegues a 10, súbele el peso y vuelve a empezar en 6. Esa sensación de progreso es lo mejor del proceso.",
  },
  {
    title: "Sets",
    text: "Los sets no van a ser iguales para todo el mundo. Hay personas que pueden hacer más volumen y otras que menos. Yo recomiendo empezar con 2 sets de trabajo y ajustar según tus resultados.",
  },
  {
    title: "Entrenar duro",
    text: "Entrenar duro no tiene que ser hasta que no puedas mover el peso ni una pulgada.",
  },
  {
    title: "Calentamiento",
    text: "Calentar es sencillo. Solo necesitas que tu cuerpo esté caliente. No tienes que hacer 20 estiramientos ni 50 reps con un peso bajo. Puede ser tan fácil como prender el calentador (heater) del carro. Si hacer estiramientos te hace sentir mejor, hazlo, pero no es necesario. Con 2 sets de calentamiento temprano en la sesión y uno después de la mitad, antes de tus sets de trabajo, está perfecto.",
  },
  {
    title: "Descanso",
    text: "Descansa alrededor de 2 minutos entre sets. Después de esos dos minutos, si tu respiración volvió a la normalidad y te sientes bien para el próximo set, ve por ello.",
  },
  {
    title: "Selección de ejercicios",
    text: "Escoge la variación que te guste. Yo prefiero máquinas porque me dejan entrenar más duro, pero si disfrutas cables, mancuernas o barras, hazlo. Usa lo que tu gym tenga.",
  },
]

const exercisesByMuscle: Array<[string, string]> = [
  ["Pecho", "Press de banca, Press inclinado, Aperturas"],
  ["Espalda", "Jalón al pecho, Remo"],
  ["Hombros", "Press militar, Elevaciones laterales"],
  ["Bíceps", "Curl de bíceps"],
  ["Tríceps", "Extensión de tríceps, Fondos"],
  ["Cuádriceps", "Sentadilla o prensa de piernas, Extensión de piernas"],
  ["Femorales", "Curl femoral, Peso muerto rumano"],
  ["Glúteos", "Hip thrust"],
  ["Adductores", "Adducción de piernas"],
  ["Abductores", "Abducción de piernas"],
  ["Pantorrillas", "Elevación de talones"],
  ["Abdomen", "Crunch"],
]

const exerciseVariations = [
  {
    src: "/images/exercises/jalon-polea.png",
    alt: "Jalón al pecho en polea",
    caption: "Jalón al pecho en polea",
  },
  {
    src: "/images/exercises/jalon-maquina.png",
    alt: "Jalón al pecho en máquina",
    caption: "Jalón al pecho en máquina",
  },
  {
    src: "/images/exercises/curl-predicador-maquina.png",
    alt: "Curl en máquina de predicador",
    caption: "Curl en máquina de predicador",
  },
  {
    src: "/images/exercises/curl-martillo.png",
    alt: "Curl martillo con mancuernas",
    caption: "Curl martillo (antebrazo)",
  },
]

const mealPlanRows = [
  [
    "Pre-entreno",
    "450",
    "6 g",
    "103 g",
    "1 g",
    "Crema de arroz 85 g, 1 guineo, miel 15 g",
  ],
  [
    "Post-entreno",
    "690",
    "52 g",
    "92 g",
    "4 g",
    "Arroz blanco 110 g, pechuga de pollo 120 g, brócoli, cebolla y pimientos",
  ],
  [
    "Comida 1",
    "690",
    "75 g",
    "77 g",
    "6 g",
    "Papas 400 g, pechuga de pollo 180 g, brócoli, cebolla y pimientos",
  ],
  [
    "Comida 2",
    "560",
    "15 g",
    "90 g",
    "10 g",
    "Avena 100 g, blueberries 85 g, piña 85 g, barra de chocolate negro 15 g",
  ],
  [
    "Total del día",
    "2,390",
    "148 g",
    "362 g",
    "21 g",
    "",
  ],
]

function Divider() {
  return (
    <div className="mx-auto max-w-[720px] px-5">
      <hr className="border-border" />
    </div>
  )
}

export function Guide() {
  return (
    <div className="bg-background text-foreground">
      <Hero />

      <GuideNav />

      {/* 01 — Un poco de mí */}
      <section className="mx-auto max-w-[720px] px-5 py-20 sm:py-28">
        <Reveal>
          <SectionKicker number="01" label="Un poco de mí" />
          <h2 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            Un poco de mí
          </h2>

          <div className="mt-8 flex flex-col gap-5 text-[16px] leading-relaxed">
            <p className="text-pretty">
              Fui el gordito toda mi vida. No el de &quot;unas libritas de más&quot;. El gordito de verdad, el
              inseguro, el que evitaba el espejo y se escondía de las fotos. Inseguro de mi cuerpo, de mi cara, hasta de
              mi voz.
            </p>
            <p className="text-pretty">
              Encontré el gym a los 17 y me cambió la vida, pero no fue rápido ni bonito. Fueron años de empezar y
              parar, de pelear con los atracones, de mirarme al espejo y seguir viendo al mismo gordito aunque los
              números dijeran otra cosa. El último año fue mi cambio más grande, y no solo en el cuerpo, sino en la
              cabeza.
            </p>
            <p className="text-pretty">
              Por eso hago esto. Te hablo como el que estuvo exactamente donde tú estás, no como un coach perfecto que
              nunca pasó hambre ni inseguridad. Si te suena familiar, estás en el lugar correcto.
            </p>
          </div>

          <p className="mt-8 text-pretty text-[16px] leading-relaxed">
            Y antes de empezar, déjame ser honesto contigo: esto es el mapa. Recorrerlo sin perderte, ajustarlo a ti,
            no estancarte, y ganarle a la cabeza, es otra conversación. Pero con este mapa tienes más que suficiente
            para empezar y ver cambios reales.
          </p>

          <Callout title="La única regla">
            Consistencia &gt; perfección. Un plan que sigues 90 días le gana siempre a un plan perfecto que abandonas en
            2 semanas.
          </Callout>
        </Reveal>
      </section>

      <Divider />

      {/* 02 — Entrenamiento */}
      <section id="entrenamiento" className="mx-auto max-w-[720px] scroll-mt-20 px-5 py-20 sm:py-28">
        <Reveal>
          <SectionKicker number="02" label="Entrenamiento" />
          <SectionBar>Entrenamiento</SectionBar>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">Cómo entrenar</h2>
          <ol className="mt-10 flex flex-col gap-8">
            {trainingPrinciples.map((item, i) => (
              <li key={item.title} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-foreground text-sm font-bold text-background">
                  {i + 1}
                </span>
                <div className="pt-0.5">
                  <p className="text-[16px] font-bold leading-relaxed">{item.title}</p>
                  <p className="mt-1 text-pretty text-[16px] leading-relaxed">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex gap-4 border-t border-border pt-10">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-foreground text-sm font-bold text-background">
              7
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[16px] font-bold leading-relaxed">Ejercicios por músculo</p>
              <p className="mt-1 text-pretty text-[16px] leading-relaxed">
                Los movimientos principales por grupo muscular. Escoge el que tu gym tenga y el que te guste.
              </p>
              <DataTable columns={["Músculo", "Ejercicios"]} rows={exercisesByMuscle} />

              <p className="mt-6 text-pretty text-[16px] leading-relaxed">
                <span className="font-semibold">Brachialis y braquiorradial (antebrazo):</span> el curl martillo y el
                curl inverso trabajan esta zona. El braquiorradial también pega el bíceps.
              </p>

              <div className="mt-8">
                <p className="text-xs font-bold uppercase tracking-[0.12em]">Variaciones (ejemplo visual)</p>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4">
                  {exerciseVariations.map((item) => (
                    <figure key={item.src} className="border border-border bg-muted/30">
                      <div className="relative aspect-[4/3] w-full bg-background">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          className="object-contain p-2"
                          sizes="(max-width: 720px) 50vw, 360px"
                        />
                      </div>
                      <figcaption className="border-t border-border px-3 py-2 text-center text-[13px] leading-snug text-muted-foreground">
                        {item.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>

              <p className="mt-6 text-pretty text-[16px] leading-relaxed text-muted-foreground">
                Estos son los movimientos generales, pero obviamente van a haber variaciones. El mismo ejercicio se
                puede hacer en polea, máquina, mancuerna o barra. Lo importante es que entiendas el patrón del
                movimiento y lo apliques con lo que tengas disponible en tu gym.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <Divider />

      {/* 03 — Nutrición */}
      <section id="nutricion" className="mx-auto max-w-[720px] scroll-mt-20 px-5 py-20 sm:py-28">
        <Reveal>
          <SectionKicker number="03" label="Nutrición" />
          <SectionBar>Nutrición</SectionBar>
        </Reveal>

        <Reveal className="mt-10">
          <PasoKicker step={1} />
          <h3 className="mt-2 text-balance text-2xl font-bold tracking-tight sm:text-3xl">
            Saca tus calorías (usa la calculadora)
          </h3>
          <p className="mt-4 text-pretty text-[16px] leading-relaxed">
            No te voy a dar una fórmula a mano, porque tus calorías dependen de tu actividad, no solo de tu peso y tu
            meta. Un hombre que solo va al gym no puede comer lo mismo que uno que además camina 10,000 pasos al día,
            aunque tengan la misma meta. Por eso usa una calculadora que tome en cuenta tu actividad real.
          </p>
          <p className="mt-4 text-pretty text-[16px] leading-relaxed">
            Ve a esta página, mete tus datos y tu nivel de actividad (sé honesto):
          </p>
          <p className="mt-4 text-pretty text-[16px] leading-relaxed">
            Y sea el nivel de actividad que creas que tienes, pon{" "}
            <span className="font-semibold">uno menos</span>. Créeme: no te mueves tanto como piensas.
          </p>
          <a
            href="https://www.calculator.net/calorie-calculator.html"
            target="_blank"
            rel="noreferrer"
            className="mt-6 flex w-full items-center justify-between gap-4 border border-foreground bg-foreground px-5 py-4 text-[16px] font-semibold text-background transition hover:bg-foreground/90"
          >
            <span>calculator.net/calorie-calculator</span>
            <span aria-hidden="true">↗</span>
          </a>
          <DeficitGuide />
        </Reveal>

        <Reveal className="mt-14">
          <PasoKicker step={2} />
          <h3 className="mt-2 text-balance text-2xl font-bold tracking-tight sm:text-3xl">
            Saca tus macros (de tu peso)
          </h3>
          <p className="mt-4 text-pretty text-[16px] leading-relaxed">
            Con tus calorías ya en mano, sacas los macros de tu peso: Proteína 0.75 g × tu peso (lb). Grasa 0.35 g × tu
            peso (lb). Carbohidratos: el resto de las calorías.
          </p>
          <p className="mt-4 text-pretty text-[16px] leading-relaxed">
            Sí, los carbos importan, no son el enemigo. Y no, no necesitas 200 g de proteína; lo único que logras con
            eso es tirarte pedos todo el día.
          </p>
          <MacroCalculator />
          <Callout title="Importante (léelo)">
            Estos números no te van a funcionar al 100%, son solo un punto de partida, y todo el mundo es diferente.
            Pero es lo más certero para arrancar. Ajusta según resultados: si en 2–3 semanas no se mueve nada, baja
            100–200 kcal; si bajas demasiado rápido, súbelas.
          </Callout>
        </Reveal>

        <Reveal className="mt-14">
          <PasoKicker step={3} />
          <h3 className="mt-2 text-balance text-2xl font-bold tracking-tight sm:text-3xl">
            Qué carbohidratos comer (según tu etapa)
          </h3>
          <DataTable
            columns={["Etapa", "Qué priorizar"]}
            rows={[
              [
                "EN DÉFICIT",
                "Mayormente carbos complejos: papa, batata, avena, frutos rojos, manzana, kiwi. Guarda los sencillos SOLO para antes y después de entrenar.",
              ],
              [
                "CRECIMIENTO / MANTENIMIENTO",
                "Combinación de los dos. Tienes más espacio, así que puedes usar complejos y sencillos durante el día.",
              ],
            ]}
          />
          <p className="mt-4 text-pretty text-[16px] leading-relaxed">
            Carbos sencillos (rápidos, ideales alrededor del entreno): arroz, rice cakes, crema de arroz, frutas tipo
            banana, e incluso dulces como Sour Patch. Tip: mira el índice glucémico, mientras más alto, más rápido se
            digiere, mejor pegado al entrenamiento.
          </p>
        </Reveal>

        <Reveal className="mt-14">
          <PasoKicker step={4} />
          <h3 className="mt-2 text-balance text-2xl font-bold tracking-tight sm:text-3xl">
            Proteínas y grasas (intercambia libre)
          </h3>
          <p className="mt-4 text-pretty text-[16px] leading-relaxed">
            Proteínas: pechuga de pollo o pavo (limpias), carne molida (más alta en grasa), pescado, huevos/claras,
            yogur griego, proteína en polvo.
          </p>
          <p className="mt-4 text-pretty text-[16px] leading-relaxed">
            Grasas: aguacate, frutos secos, aceite de oliva, mantequilla de maní, yema de huevo, queso.
          </p>
          <Callout title="La regla de las grasas">
            Si comes proteína limpia (pechuga), te sobra espacio para añadir grasas ricas: frutos secos, aguacate,
            huevos. Si comes proteína alta en grasa (carne molida), ya estás gastando grasa ahí. Y si quieres las dos,
            está bien, solo entiende que las porciones de cada una van a ser más pequeñas para que tu grasa total
            cuadre.
          </Callout>
          <p className="mt-4 text-pretty text-[16px] leading-relaxed">
            Controla los aceites y los sprays &quot;0 calorías&quot;. Si le tiras al sartén por 5 segundos, ya no son 0
            calorías, ahora son 100 o 200.
          </p>
        </Reveal>

        <Reveal className="mt-14">
          <PasoKicker step={5} />
          <h3 className="mt-2 text-balance text-2xl font-bold tracking-tight sm:text-3xl">
            Cómo contar calorías (rápido)
          </h3>
          <p className="mt-4 text-pretty text-[16px] leading-relaxed">
            1. Baja Cronometer (gratis). 2. Compra una pesa de cocina. 3. Pon el envase en la pesa y usa &quot;tarar&quot;
            (poner en cero) antes de echar la comida. 4. Pesa las comidas crudas siempre que puedas. 5. Usa el escáner de
            código de barras de la app, te dice si el dato es crudo o cocido. Si no escanea, búscala en el buscador
            manual. Si no sale, regístrala con los datos de nutrición de atrás del empaque.
          </p>
          <p className="mt-4 text-pretty text-[16px] leading-relaxed">
            Trackea por un tiempo para que veas lo mucho que estabas comiendo de verdad. No tienes que trackear toda la
            vida: llega a tu físico y crea la habilidad de poder saber qué le estás poniendo a tu cuerpo.
          </p>
          <p className="mt-4 text-pretty text-[16px] leading-relaxed">
            ¿Cuántas comidas al día? Mínimo 2, pero yo recomiendo 3. Máximo las que quieras, pero yo recomiendo 5. Lo que
            importa es el total del día, no el número de comidas.
          </p>
        </Reveal>

        <Reveal className="mt-14">
          <PasoKicker step={6} />
          <h3 className="mt-2 text-balance text-2xl font-bold tracking-tight sm:text-3xl">
            Cómo ser social sin sacrificar resultados
          </h3>
          <p className="mt-4 text-pretty text-[16px] leading-relaxed">
            Muévete más y sé inteligente con tus comidas el día de cualquier actividad y el día después. Y recuerda: no
            porque comas afuera tienes que pedir lo más puerco del menú, pide algo que te guste y que disfrutes, pero no
            hay necesidad de ser un glotón.
          </p>
          <p className="mt-4 text-pretty text-[16px] leading-relaxed">
            Otra cosa: el alcohol es horrible para tu salud, tu sueño y tu progreso. No te estoy diciendo que no lo
            bebas, pero usa la cabeza. No toda ocasión es la ocasión en la que te tienes que intoxicar.
          </p>
        </Reveal>
      </section>

      <Divider />

      {/* 04 — Mi Plan */}
      <section id="mi-plan" className="mx-auto max-w-[720px] scroll-mt-20 px-5 py-20 sm:py-28">
        <Reveal>
          <SectionKicker number="04" label="Mi Plan" />
          <SectionBar>Mi Plan</SectionBar>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">Mi Plan</h2>

          <h3 className="mt-10 text-xl font-bold tracking-tight">Mi enfoque</h3>
          <p className="mt-3 text-pretty text-[16px] leading-relaxed">
            La mayoría de mis carbohidratos caen alrededor del entrenamiento, antes y después, para tener energía y
            recuperar. El resto del día lo mantengo más liviano.
          </p>

          <h3 className="mt-10 text-xl font-bold tracking-tight">Cómo peso la comida</h3>
          <p className="mt-3 text-pretty text-[16px] leading-relaxed">
            Todo lo que no es carne lo peso seco o crudo. Las carnes las peso cocidas.
          </p>

          <h3 className="mt-10 text-xl font-bold tracking-tight">Mi rutina</h3>
          <p className="mt-3 text-[16px] leading-relaxed text-muted-foreground">
            Push / Pull / Receso / Push / Pull / Receso / Receso
          </p>
          <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
            4 días de entrenamiento. (Series = sets de trabajo, sin contar calentamiento.)
          </p>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-[0.15em]">Día PUSH (empuje)</h4>
              <DataTable
                columns={["Ejercicio", "Series"]}
                rows={[
                  ["Press plano o mid-flyes", "2"],
                  ["Press militar (agarre neutral)", "2"],
                  ["Elevaciones laterales", "2"],
                  ["Extensión de tríceps (cualquiera)", "2"],
                  ["Leg extension", "2"],
                  ["Ab crunch", "2"],
                ]}
              />
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-[0.15em]">Día PULL (jale)</h4>
              <DataTable
                columns={["Ejercicio", "Series"]}
                rows={[
                  ["Jalón al pecho (agarre abierto)", "2"],
                  ["Remo (agarre abierto)", "2"],
                  ["Bicep curl (cualquiera)", "2"],
                  ["Hammer curl", "2"],
                  ["Curl femoral", "2"],
                ]}
              />
            </div>
          </div>

          <h3 className="mt-12 text-xl font-bold tracking-tight">Mi plan de comidas (mis números reales)</h3>
          <WideDataTable
            columns={["Comida", "Calorías", "Proteína", "Carbohidratos", "Grasa", "Qué como"]}
            rows={mealPlanRows}
            boldLastRow
          />
        </Reveal>
      </section>

      <Divider />

      {/* 05 — Lo que sigue */}
      <section id="siguiente" className="mx-auto max-w-[720px] scroll-mt-20 px-5 py-20 text-center sm:py-28">
        <Reveal>
          <div className="flex flex-col items-center">
            <SectionKicker number="05" label="Lo que sigue" />
            <span className="mt-5">
              <SectionBar>Lo que sigue</SectionBar>
            </span>
          </div>
          <p className="mx-auto mt-8 max-w-lg text-pretty text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
            Esto es un resumen del mapa. Lo hice lo más simple posible para que saques la mayor cantidad de resultados
            con lo mínimo.
          </p>
          <p className="mx-auto mt-5 max-w-lg text-pretty text-[16px] leading-relaxed text-muted-foreground">
            Pero recorrerlo no es tan fácil cuando lo haces por tu cuenta. Ajustarlo a ti, saber qué cambiar cuando te
            estancas, y ganarle a la cabeza y a los antojos, ahí es donde la mayoría se cae. Eso es lo que yo hago con
            la gente que entreno.
          </p>
          <Callout title="Tu próximo paso" className="mx-auto mt-8 max-w-lg text-left">
            Si tienes preguntas o quieres que te ayude a aplicar esto a ti, escríbeme por DM en Instagram. Pronto voy a
            abrir unos espacios para trabajar contigo directo.
          </Callout>
          <p className="mt-12 font-display text-4xl tracking-tight sm:text-5xl">¡Vamo pa&apos; encima!</p>
        </Reveal>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-[720px] px-5 py-10 text-center font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
          Guía de Entrenamiento y Nutrición · @cazul.fit
        </div>
      </footer>
    </div>
  )
}
