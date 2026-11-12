# Trivial Web

**Trivial Web** és un joc de preguntes i respostes que es podrà jugar des del navegador. El projecte està desenvolupat en equip amb HTML, CSS i JavaScript, i està pensat per funcionar localment, sense necessitat d'un servidor ni d'una base de dades.

## Objectiu del joc

L'objectiu és respondre correctament preguntes de diferents categories. A cada pregunta, el jugador haurà d'escollir una resposta entre diverses opcions abans que s'acabi el temps disponible.

En acabar la partida, el joc mostrarà els resultats perquè el jugador pugui veure com li ha anat. Després podrà tornar a jugar o sortir. Amb aquest projecte volem crear un joc entretingut i fàcil d'utilitzar que posi a prova els coneixements dels jugadors.

## Funcionalitats previstes

- Preguntes organitzades per categories.
- Diverses opcions de resposta per a cada pregunta.
- Temporitzador durant el joc.
- Comprovació de les respostes.
- Pantalla de resultats al final de la partida.
- Opció de tornar a jugar o sortir.

## Tecnologies utilitzades

- **HTML:** estructura de les pantalles i dels elements del joc.
- **CSS:** disseny i presentació visual.
- **JavaScript:** funcionament del joc, gestió de les preguntes, respostes, temps i resultats.

## Com jugar

1. Obre el joc al navegador.
2. Comença una partida.
3. Llegeix cada pregunta i selecciona una de les respostes disponibles.
4. Intenta respondre abans que s'acabi el temps.
5. Consulta el resultat final i decideix si vols tornar a jugar.

## Organització de l'equip

| Membre | Responsabilitat principal |
| --- | --- |
| Bruno | Lògica del joc amb JavaScript |
| Isaac | Interfície i disseny amb HTML i CSS |
| Sergi | Contingut, categories i preguntes |
| Pol | Coordinació del projecte i organització a GitHub |

Les responsabilitats estan repartides, però les parts del joc s'han d'integrar entre elles. Per exemple, les preguntes preparades per Sergi s'utilitzaran des de la lògica JavaScript, i la interfície les mostrarà al jugador.

## Estructura del projecte

```text
assets/              Recursos visuals del joc
css/styles.css       Estils de la interfície
docs/                Documentació i planificació
js/                  Lògica del joc
README.md            Informació general del projecte
```

Aquesta estructura pot canviar a mesura que avanci el desenvolupament. Les preguntes es poden mantenir en un fitxer JavaScript separat, com ara `js/preguntes.js`, per facilitar-ne l'organització.

## Documentació

La documentació del projecte es troba a la carpeta `docs/`. La planificació i el repartiment de tasques es poden consultar a `docs/planificacio.md`.

## Estat del projecte

El projecte es troba en desenvolupament. Les funcionalitats i les instruccions d'execució s'actualitzaran a mesura que es completin i es provin.
