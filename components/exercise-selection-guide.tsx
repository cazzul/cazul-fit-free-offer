import { Callout, WideDataTable } from "@/components/guide-ui"

const movementPatterns: string[][] = [
  ["Pecho", "Pectoral superior", "Flexión de hombro y aducción horizontal"],
  ["Pecho", "Pectoral medio/inferior", "Aducción horizontal"],
  ["Espalda", "Espalda superior", "Retracción/elevación escapular y abducción horizontal"],
  ["Espalda", "Dorsales", "Extensión de hombro y aducción de hombro"],
  ["Hombros", "Deltoide anterior", "Flexión de hombro"],
  ["Hombros", "Deltoide lateral", "Abducción de hombro"],
  ["Hombros", "Deltoide posterior", "Aducción horizontal y extensión de hombro"],
  ["Brazos", "Bíceps", "Flexión de codo"],
  ["Brazos", "Tríceps", "Extensión de codo"],
  ["Piernas", "Cuádriceps", "Extensión de rodilla y flexión de cadera"],
  ["Piernas", "Isquiotibiales", "Flexión de rodilla y extensión de cadera"],
  ["Piernas", "Glúteos", "Extensión de cadera y abducción de cadera"],
  ["Piernas", "Aductores", "Aducción de cadera"],
  ["Piernas", "Pantorrillas", "Flexión plantar"],
  ["Core", "Abdominales", "Flexión espinal"],
  ["Core", "Oblicuos", "Flexión lateral"],
  ["Core", "Erector espinal", "Extensión espinal"],
]

const splitCalendar: string[][] = [
  ["Full body 3x", "FB", "Off", "FB", "Off", "FB", "Off", "Off"],
  ["Full body 2x", "FB", "Off", "Off", "FB", "Off", "Off", "Off"],
  ["PPL 6x", "Push", "Pull", "Piernas", "Push", "Pull", "Piernas", "Off"],
  ["Upper/Lower 4x", "Upper", "Lower", "Off", "Upper", "Lower", "Off", "Off"],
  ["PPL + UL híbrido 5x", "Push", "Pull", "Piernas", "Upper", "Lower", "Off", "Off"],
  ["Push/Pull 4x", "Push", "Pull", "Off", "Push", "Pull", "Off", "Off"],
]

export function ExerciseSelectionGuide() {
  return (
    <div className="min-w-0 flex-1">
      <p className="text-[16px] font-bold leading-relaxed">Selección de ejercicios (cómo armar tu propia rutina)</p>

      <p className="mt-4 text-pretty text-[16px] leading-relaxed">
        Te voy a enseñar a armar tu propia rutina. Lo que vas a ver se ve complicado, pero te prometo que si lo estudias
        un poco no vas a necesitar la ayuda de nadie. Y te lo digo yo, que soy coach.
      </p>
      <p className="mt-4 text-pretty text-[16px] leading-relaxed">
        Funciona en 3 pasos. Vamos uno por uno.
      </p>

      <h4 className="mt-10 text-lg font-bold tracking-tight">Paso 1: Rankea tus grupos musculares</h4>
      <p className="mt-3 text-pretty text-[16px] leading-relaxed">
        Los grupos principales son: <span className="font-semibold">Pecho, Espalda, Hombros (deltoides), Brazos, Piernas y Core.</span>
      </p>
      <p className="mt-4 text-pretty text-[16px] leading-relaxed">
        Haz un top de esos grupos según lo importantes que son para TUS metas y el físico que TÚ quieres. Empiezo yo:
      </p>
      <ol className="mt-4 list-decimal space-y-1 pl-5 text-[16px] leading-relaxed">
        <li>Hombros</li>
        <li>Espalda</li>
        <li>Brazos</li>
        <li>Pecho</li>
        <li>Core</li>
        <li>Piernas (sí, de último, mátenme)</li>
      </ol>
      <p className="mt-4 text-pretty text-[16px] leading-relaxed">
        El que esté más arriba es al que le vas a dar más trabajo.
      </p>

      <h4 className="mt-10 text-lg font-bold tracking-tight">Paso 2: Decide cuántos ejercicios vas a hacer</h4>
      <p className="mt-3 text-pretty text-[16px] font-bold leading-relaxed">
        Primero, el total de ejercicios según los días que vas al gym:
      </p>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-[16px] leading-relaxed">
        <li>2 a 3 días: 10 ejercicios o menos</li>
        <li>4 días: 12 o menos</li>
        <li>5 días: 15 o menos</li>
        <li>6 días: 15 o más (aunque honestamente no hay razón para ir 6 días)</li>
      </ul>
      <p className="mt-4 text-pretty text-[16px] font-bold leading-relaxed">
        Ahora reparte esos ejercicios según tu ranking del Paso 1.
      </p>
      <p className="mt-2 text-pretty text-[16px] leading-relaxed">Mientras más arriba el grupo, más ejercicios le das:</p>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-[16px] leading-relaxed">
        <li>Top 1: 2 a 3 ejercicios</li>
        <li>Top 2: 2 a 3 ejercicios</li>
        <li>Top 3: 1 a 3 ejercicios</li>
        <li>Top 4: 1 a 2 ejercicios</li>
        <li>Top 5: 1 a 2 ejercicios</li>
        <li>Top 6: 1 a 2 ejercicios</li>
      </ul>
      <p className="mt-4 text-pretty text-[16px] font-bold leading-relaxed">Cada grupo se divide en músculos.</p>
      <p className="mt-2 text-pretty text-[16px] leading-relaxed">
        Dentro de cada grupo, escoge los músculos que más te importan. El menú completo de músculos es:
      </p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-[16px] leading-relaxed">
        <li>
          <span className="font-semibold">Pecho:</span> pectoral superior, pectoral medio/inferior
        </li>
        <li>
          <span className="font-semibold">Espalda:</span> espalda superior (trapecios, deltoides posteriores, romboides), dorsales (alto y bajo)
        </li>
        <li>
          <span className="font-semibold">Hombros:</span> deltoide anterior, deltoide lateral, deltoide posterior
        </li>
        <li>
          <span className="font-semibold">Brazos:</span> bíceps, tríceps
        </li>
        <li>
          <span className="font-semibold">Piernas:</span> cuádriceps, isquiotibiales, glúteos, aductores, pantorrillas
        </li>
        <li>
          <span className="font-semibold">Core:</span> abdominales, oblicuos, erector espinal
        </li>
      </ul>
      <p className="mt-6 text-pretty text-[16px] font-bold leading-relaxed">
        Ahora asigna cuántos ejercicios le das a cada músculo dentro de tu grupo.
      </p>
      <p className="mt-2 text-pretty text-[16px] leading-relaxed">Así lo hago yo, basado en mi rutina:</p>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-[16px] leading-relaxed">
        <li>Hombros: deltoide lateral (1) y deltoide anterior (1)</li>
        <li>Espalda: dorsales (2) y espalda superior (1)</li>
        <li>Brazos: bíceps (1) y tríceps (1)</li>
        <li>Pecho: pectoral superior (1) y pectoral medio/inferior (1)</li>
        <li>Core: abdominales (1)</li>
        <li>Piernas: cuádriceps (1) e isquiotibiales (1)</li>
      </ul>
      <p className="mt-4 text-pretty text-[16px] leading-relaxed">
        <span className="font-semibold">Total de ejercicios = 12.</span>
      </p>
      <Callout title="Nota">
        Si quieres añadir un ejercicio extra para cierto músculo, hazlo. Aquí estoy tratando de mantenerlo simple, pero
        al final van a haber modificaciones: se van a quitar y añadir movimientos siempre. Si algo está más alineado a
        tu meta, hazlo.
      </Callout>

      <h4 className="mt-10 text-lg font-bold tracking-tight">
        Paso 3: Escoge tus ejercicios en base a los músculos que escogiste y la cantidad de ejercicios que tienes
      </h4>
      <p className="mt-3 text-pretty text-[16px] leading-relaxed">
        Estos son los ejercicios con su nombre general. Los puedes hacer en máquina, mancuernas, cables, barra o lo que
        tengas disponible. Lo importante es el movimiento, no el equipo.
      </p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-[16px] leading-relaxed">
        <li>
          <span className="font-semibold">Pectoral superior:</span> incline chest press, low to high flyes, press inclinado agarre neutral (pega superior y medio)
        </li>
        <li>
          <span className="font-semibold">Pectoral medio/inferior:</span> flat press, cable flyes
        </li>
        <li>
          <span className="font-semibold">Espalda superior</span> (trapecios, romboides, deltoide posterior): chest-supported row, face pull
        </li>
        <li>
          <span className="font-semibold">Dorsales:</span> lat pulldown (dorsal alto), pullover (dorsal bajo)
        </li>
        <li>
          <span className="font-semibold">Deltoide anterior:</span> front raise, shoulder press agarre neutral (pega anterior y lateral)
        </li>
        <li>
          <span className="font-semibold">Deltoide lateral:</span> lateral raise, shoulder press (pega anterior y lateral)
        </li>
        <li>
          <span className="font-semibold">Deltoide posterior:</span> reverse pec deck, rear delt fly
        </li>
        <li>
          <span className="font-semibold">Bíceps:</span> curl de bíceps, preacher curl
        </li>
        <li>
          <span className="font-semibold">Tríceps:</span> triceps pushdown, tricep extension, dips (pega tríceps, pecho medio/inferior y deltoide anterior)
        </li>
        <li>
          <span className="font-semibold">Cuádriceps:</span> leg extension, squat (pega cuádriceps, aductores y glúteos)
        </li>
        <li>
          <span className="font-semibold">Isquiotibiales:</span> leg curl, peso muerto pierna recta (pega isquios, glúteos, aductores y erector)
        </li>
        <li>
          <span className="font-semibold">Glúteos:</span> hip thrust, peso muerto rumano (pega isquios, glúteos, aductores y erector)
        </li>
        <li>
          <span className="font-semibold">Aductores:</span> máquina de aducción de cadera
        </li>
        <li>
          <span className="font-semibold">Pantorrillas:</span> standing calf raise
        </li>
        <li>
          <span className="font-semibold">Abdominales:</span> ab crunch
        </li>
        <li>
          <span className="font-semibold">Oblicuos:</span> side bend
        </li>
        <li>
          <span className="font-semibold">Erector espinal:</span> back extension (45°)
        </li>
      </ul>

      <h4 className="mt-10 text-lg font-bold tracking-tight">
        Avanzado: los patrones de movimiento (opcional, pero te vuelve experto)
      </h4>
      <p className="mt-3 text-pretty text-[16px] leading-relaxed">
        Si entiendes esto, vas a poder crear tus propias rutinas sin depender de ninguna lista. Cada músculo se entrena
        con un movimiento de articulación. Escoge cualquier ejercicio que haga ese movimiento y estás bien.
      </p>
      <WideDataTable
        columns={["Grupo", "Sección", "Patrón de movimiento"]}
        rows={movementPatterns}
      />

      <h4 className="mt-10 text-lg font-bold tracking-tight">Paso 4: Reparte tus ejercicios en los días que entrenas</h4>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-[16px] leading-relaxed">
        <li>
          <span className="font-semibold">2 a 3 días:</span> es una sola rutina que repites cada día que vas.
        </li>
        <li>
          <span className="font-semibold">4 días:</span> divide tus ejercicios en 2 días y repite (día 1, día 2, día 1, día 2).
        </li>
        <li>
          <span className="font-semibold">5 días:</span> divide la rutina en 3 días (días 1 a 3). Luego agarra uno de esos 3 días, divídelo en dos, y eso se vuelve tus días 4 y 5.
        </li>
      </ul>
      <p className="mt-4 text-pretty text-[16px] leading-relaxed">
        <span className="font-semibold">Regla clave:</span> que los músculos de un día sean antagonistas (opuestos) a los del otro. No hagas pecho un día y hombros con tríceps al otro, porque se solapan. No hagas squats e isquios un día y glúteos al otro. Días opuestos recuperan mejor.
      </p>

      <h4 className="mt-8 text-base font-bold tracking-tight">Splits de entrenamiento (calendario semanal)</h4>
      <WideDataTable
        columns={["Split", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"]}
        rows={splitCalendar}
      />
      <p className="mt-4 text-pretty text-[16px] font-bold leading-relaxed">Notas rápidas:</p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-[16px] leading-relaxed">
        <li>
          <span className="font-semibold">Full body 3x:</span> un día de descanso entre cada sesión. El clásico para frecuencia sin quemarte.
        </li>
        <li>
          <span className="font-semibold">Full body 2x:</span> sesiones largas, 2 veces por semana.
        </li>
        <li>
          <span className="font-semibold">PPL:</span> cada músculo 2 veces por semana. El split más común.
        </li>
        <li>
          <span className="font-semibold">Upper/Lower:</span> cada músculo 2 veces por semana, buen balance entre frecuencia y recuperación.
        </li>
        <li>
          <span className="font-semibold">PPL + UL híbrido:</span> PPL la primera mitad de la semana, Upper/Lower la segunda.
        </li>
        <li>
          <span className="font-semibold">Push/Pull:</span> las piernas se reparten (push = cuádriceps y pantorrillas, pull = isquios y glúteos) o se hacen aparte.
        </li>
      </ul>
      <p className="mt-4 text-pretty text-[16px] leading-relaxed">
        Mi rutina es <span className="font-semibold">Push/Pull repartiendo piernas</span>, y la puedes ver más abajo en este mismo documento.
      </p>
      <p className="mt-4 text-pretty text-[16px] leading-relaxed">
        Y ya, tienes tu rutina. Si la armaste completa o te quedaste a mitad, mándamela a mis DMs y te ayudo a completarla o te doy feedback.
      </p>
    </div>
  )
}
