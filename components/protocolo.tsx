import Link from "next/link"
import { BackToHomeButton } from "@/components/back-to-home-button"
import { CoachingCta } from "@/components/coaching-cta"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/landing/ui/button"
import {
  Callout,
  SectionBar,
  SectionKicker,
  WideDataTable,
} from "@/components/guide-ui"

export function Protocolo() {
  return (
    <>
    <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
      <header className="mb-16 border-b border-border pb-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Cazul.fit · Entrenamiento y nutrición
        </p>
        <h1 className="mt-4 font-display text-4xl leading-[1.1] tracking-tight sm:text-5xl">
          El Protocolo de 90 Días
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          El empujón final para llegar a tu mejor versión.
        </p>
        <p className="mt-4 text-[16px] leading-relaxed">
          Esto no es para cualquiera. Es para la persona que ya entrena y que quiere dar el empujón
          final para verse realmente lean. No funciona como punto de partida para alguien que empieza
          de cero, y tampoco es para alguien muy pasado de peso. Esta es la última fase, la más
          exigente, la que te lleva de un buen físico a tu mejor versión.
        </p>
        <p className="mt-4 text-[16px] leading-relaxed">
          Tiene fecha de inicio y fecha de final, y por eso se puede exigir tanto. Mantener un buen
          físico después es bastante más llevadero que llegar hasta aquí.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <BackToHomeButton />
          <Button asChild variant="outline" size="sm">
            <Link href="/guia">Guía de entrenamiento y nutrición</Link>
          </Button>
          <ThemeToggle />
        </div>
      </header>

      <section className="mb-14">
        <SectionKicker number="00" label="Léelo antes de empezar" />
        <Callout title="Importante" className="mt-6">
          Soy yo compartiendo lo que hice y lo que recomendaría. No soy profesional de la salud y
          esto no es consejo médico. No sustituye a un doctor ni a un nutricionista. No es para
          principiantes, menores de edad, embarazo o lactancia, ni para nadie con historial de
          desórdenes alimenticios o condiciones médicas. Si en algún momento aparecen las señales de
          alerta, bajas el ritmo o subes calorías.
        </Callout>
      </section>

      <section className="mb-14">
        <SectionKicker number="01" label="Enfoque" />
        <h2 className="mt-4 font-display text-2xl">La idea</h2>
        <p className="mt-4 text-[16px] leading-relaxed">
          La estrategia es ir fuerte desde el inicio de la fase y suavizar el déficit hacia el final.
          Al principio todavía tienes energía, motivación, y las hormonas del hambre no se han
          acomodado, así que es cuando más fácil te resulta comer menos. Esa ventana se aprovecha
          para crear el déficit más grande.
        </p>
        <p className="mt-4 text-[16px] leading-relaxed">
          Lo importante es cómo se mueve el déficit a lo largo de las semanas. Las calorías van
          subiendo según avanza el plan, pero la actividad también sube para sostener el mismo
          déficit. En otras palabras, comes más, pero te lo ganas moviéndote más.
        </p>
        <p className="mt-4 text-[16px] leading-relaxed">
          Decirle que no a la comida se vuelve más difícil con el tiempo, mientras que el cardio
          cuesta pero se hace. Así que el plan se vuelve más llevadero de cabeza y más exigente de
          cuerpo según avanza. Para el final estás moviéndote bastante pero comiendo decente, y eso
          se sostiene mejor que pasar hambre.
        </p>
      </section>

      <section className="mb-14">
        <SectionKicker number="02" label="Base" />
        <h2 className="mt-4 font-display text-2xl">Fase 0: dos semanas de base</h2>
        <p className="mt-4 text-[16px] leading-relaxed">
          No cuentan dentro de los 90. Antes de recortar nada necesitas tus números, y estas dos
          semanas son para eso:
        </p>
        <ul className="mt-6 space-y-3 text-[16px] leading-relaxed">
          <li>
            <strong>Encuentra tu mantenimiento.</strong> Come normal, pésate a diario y saca el
            promedio semanal. Si el peso no se mueve, ese es tu mantenimiento.
          </li>
          <li>
            <strong>Fija tus macros en este orden:</strong> proteína 1.6 a 1.8 g por kg (0.7 a 0.8 g
            por libra), grasa 0.3 a 0.4 g por libra y estable, y los carbos se llevan todo lo que
            sobra.
          </li>
          <li>
            <strong>Base de actividad:</strong> 10,000 pasos al día y 20 min de cardio suave 3 a 4
            veces por semana, después de levantar.
          </li>
          <li>
            <strong>Levanta 3 a 5 días.</strong> Menos volumen y más intensidad. En una fase de
            definición no quieres acumular fatiga, quieres dar el estímulo justo y recuperar.
          </li>
        </ul>
      </section>

      <section className="mb-14">
        <SectionKicker number="03" label="Macros" />
        <h2 className="mt-4 font-display text-2xl">
          Por qué tantos carbos, y la proteína al mínimo
        </h2>
        <p className="mt-4 text-[16px] leading-relaxed">
          Pasado cierto punto, más proteína no hace nada extra. Lo que mantiene el músculo es
          entrenar fuerte, y los carbos son los que te permiten entrenar fuerte.
        </p>
        <p className="mt-4 text-[16px] leading-relaxed">
          En definición, si mantienes la fuerza mantienes el músculo. Un músculo fuerte es un
          músculo grande, las dos cosas van juntas. Si no te debilitas, no te encoges. Por eso la
          proteína y la grasa se quedan en su mínimo funcional, y el resto de las calorías van a
          carbos para rendir en el gym.
        </p>
      </section>

      <section className="mb-14">
        <SectionKicker number="04" label="Reglas" />
        <SectionBar>Las reglas que no se rompen</SectionBar>
        <ul className="mt-6 space-y-3 text-[16px] leading-relaxed">
          <li>
            <strong>La proteína es el piso, no el techo.</strong> De 1.6 a 1.8 g por kg es
            suficiente. Más no te da más.
          </li>
          <li>
            <strong>La grasa estable.</strong> De 0.3 a 0.4 g por libra, en un rango cerrado. No la
            dejes caer a cero porque la necesitas para las hormonas.
          </li>
          <li>
            <strong>Los carbos cargan el resto.</strong> Son tu energía. Cuando recortes, recorta de
            los extras y de la grasa antes que de los carbos.
          </li>
          <li>
            <strong>Cap de ritmo de pérdida.</strong> No pierdas más de 1% de tu peso por semana. Si
            bajas más rápido estás comiendo muy poco, así que sube calorías.
          </li>
          <li>
            <strong>Duerme.</strong> De 7 a 9 horas. El sueño es la herramienta de pérdida de grasa
            que casi todos ignoran.
          </li>
        </ul>
      </section>

      <section className="mb-14">
        <SectionKicker number="05" label="Progresión" />
        <h2 className="mt-4 font-display text-2xl">La progresión de 90 días</h2>
        <p className="mt-4 text-[16px] leading-relaxed">
          El déficit arranca con poca comida y poco movimiento. Según avanza la fase comes más y te
          mueves más. El déficit se mantiene parecido, pero el peso se va corriendo del plato hacia
          los pasos y el cardio.
        </p>
        <WideDataTable
          columns={["Semanas", "Comida", "Pasos", "Cardio (post-pesas)"]}
          rows={[
            ["1 a 4", "Más baja (déficit agresivo)", "10k a 12k", "20 a 25 min"],
            ["5 a 8", "Sube un poco", "12k a 13k", "25 a 35 min"],
            ["9 a 12", "Más alta", "13k a 15k", "35 a 45 min"],
          ]}
        />
        <p className="mt-4 text-[16px] leading-relaxed">
          Pesas: 3 a 5 días toda la fase. Bajo volumen y alta intensidad. La meta es mantener fuerza
          y músculo mientras pierdes grasa.
        </p>
      </section>

      <section className="mb-14">
        <SectionKicker number="06" label="Ajustes" />
        <h2 className="mt-4 font-display text-2xl">Cómo mueves el déficit</h2>
        <p className="mt-4 text-[16px] leading-relaxed">
          Cuando la pérdida se estanca, no recortes comida de inmediato. Ataca en este orden:
        </p>
        <ol className="mt-6 list-decimal space-y-3 pl-5 text-[16px] leading-relaxed">
          <li>
            <strong>Sube pasos primero.</strong> De 10k a 12k a 15k. Es el ajuste más fácil de
            sostener.
          </li>
          <li>
            <strong>Sube cardio un poco.</strong> 5 min más por sesión cada par de semanas. El cardio
            cuesta mantenerlo, así que úsalo con cabeza.
          </li>
          <li>
            <strong>Recorta comida de último.</strong> Y cuando lo hagas, baja de la grasa y los
            extras antes que de los carbos o la proteína.
          </li>
        </ol>
      </section>

      <section className="mb-14">
        <SectionKicker number="07" label="Expectativas" />
        <h2 className="mt-4 font-display text-2xl">Sé realista con tu punto de partida</h2>
        <p className="mt-4 text-[16px] leading-relaxed">
          Esto no es un atajo para alguien muy pasado de peso. No vas a pasar de 30% a 10% de grasa
          en 90 días. Si estás cerca de 20%, puedes llegar a 13 o 14%. Si estás cerca de 15%, puedes
          bajar a los diez y pico.
        </p>
        <p className="mt-4 text-[16px] leading-relaxed">
          El que está más gordo tiene más potencial de perder grasa, pero el potencial solo significa
          que todavía no lo has hecho. El que ya está lean sabe mantenerse lean, y esa es la
          habilidad de verdad.
        </p>
      </section>

      <section className="mb-14">
        <SectionKicker number="08" label="Señales" />
        <h2 className="mt-4 font-display text-2xl">Señales para parar o subir calorías</h2>
        <p className="mt-4 text-[16px] leading-relaxed">
          Esta fase es exigente, pero no es un castigo. Si aparece algo de esto, baja el ritmo y, si
          hace falta, habla con un profesional:
        </p>
        <ul className="mt-6 space-y-3 text-[16px] leading-relaxed">
          <li>Mareos, debilidad constante o que tu fuerza en el gym se desplome.</li>
          <li>Sueño, ánimo o ciclo menstrual alterados.</li>
          <li>
            Pensamientos obsesivos con la comida o sensación de que pierdes el control alrededor de
            ella.
          </li>
        </ul>
        <Callout title="Regla simple" className="mt-6">
          Si tu cuerpo te está gritando, lo escuchas. Ningún físico vale tu salud.
        </Callout>
      </section>

      <section className="mb-14">
        <SectionKicker number="09" label="Después" />
        <h2 className="mt-4 font-display text-2xl">Después de los 90 días</h2>
        <p className="mt-4 text-[16px] leading-relaxed">
          No te quedes en este punto. Sube las calorías de vuelta hacia mantenimiento poco a poco,
          baja el cardio y quédate en el físico que construiste. Mantenerlo es la parte fácil, y eso
          sí se sostiene.
        </p>
        <p className="mt-4 text-[16px] leading-relaxed">
          Los 90 días eran el empujón final. Lo de después es caminar.
        </p>
      </section>

      <footer className="border-t border-border pt-8 text-sm leading-relaxed text-muted-foreground">
        Esto refleja mi experiencia y lo que yo haría. No soy profesional de la salud, y esto no es
        consejo médico ni un plan personalizado. Tú eres responsable de tu salud, así que ante la
        duda consulta a un profesional.
      </footer>
    </article>
    <CoachingCta />
  </>
  )
}
