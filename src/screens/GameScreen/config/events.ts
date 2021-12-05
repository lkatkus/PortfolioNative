const getEventConfig =
  ({ app }: any) =>
  (game: any) => {
    return [
      {
        id: 'initialEvent',
        row: [41, 41],
        col: [5, 9],
        eventHandler: (playerRef: any) => {
          app.setEvent({
            text: 'Whoo... What is this place?',
            image: playerRef?.canFly ? 'roboImage' : 'playerImage',
          });
        },
        onLeave: app.clearEvent,
      },
      {
        id: 'makeArchitectsGreatAgain',
        row: [41, 41],
        col: [14, 27],
        eventHandler: (playerRef: any) =>
          app.setEvent({
            text: 'I think that someone has told me that architects make great developers.',
            image: playerRef?.canFly ? 'roboImage' : 'playerImage',
            onClick: {
              text: 'About',
              clickHandler: () => {
                app.openTab('about');
              },
            },
          }),
        onLeave: app.clearEvent,
      },
      {
        id: 'moveUp',
        row: [41, 41],
        col: [35, 39],
        eventHandler: () =>
          app.setEvent({
            text: 'You should try climbing up.',
            image: 'workerImage',
          }),
        onLeave: app.clearEvent,
      },
      {
        id: 'webPortfolio',
        row: [35, 35],
        col: [35, 38],
        eventHandler: (playerRef: any) =>
          app.setEvent({
            text: 'Hmmm... Not too bad! I think that I should come back later.',
            image: playerRef?.canFly ? 'roboImage' : 'playerImage',
            onClick: {
              text: 'Portfolio',
              clickHandler: () => app.openTab('skills'),
            },
          }),
        onLeave: app.clearEvent,
      },
      {
        id: 'gitRedirect',
        row: [35, 35],
        col: [40, 45],
        eventHandler: (playerRef: any) =>
          app.setEvent({
            text: '"In case of fire - git add -A, git commit -m "FIRE!", git push origin HEAD --force"',
            image: playerRef?.canFly ? 'roboImage' : 'playerImage',
            onClick: {
              text: 'Github',
              clickHandler: () => app.openPage('https://github.com/lkatkus'),
            },
          }),
        onLeave: app.clearEvent,
      },
      {
        id: 'miscPortfolio',
        row: [35, 35],
        col: [47, 50],
        eventHandler: (playerRef: any) =>
          app.setEvent({
            text: 'Autocad, Archicad, 3DS MAX, Photoshop, Illustrator, Nikon, Aperture, Bokeh and etc. Lots of fancy words, huh?',
            image: playerRef?.canFly ? 'roboImage' : 'playerImage',
            onClick: {
              text: 'Other',
              clickHandler: () => app.openTab('other'),
            },
          }),
        onLeave: app.clearEvent,
      },
      {
        id: 'catSpeak',
        row: [33, 33],
        col: [13, 24],
        eventHandler: () => app.setEvent({ text: 'Meow!', image: 'catImage' }),
        onLeave: app.clearEvent,
      },
      {
        id: 'randomJoke',
        row: [24, 24],
        col: [25, 45],
        eventHandler: (playerRef: any) =>
          app.setEvent({
            text: (() => {
              const jokes = [
                'Why arent koalas actual bears?... They dont meet the koalafications.',
                'How do trees get online?... They just log in.',
                'Why did the computer show up at work late?... It had a hard drive.',
                'Why was the cell phone wearing glasses?... Because it lost its contacts.',
                'What do you call a cow with a twitch?... Beef jerky.',
                'What do you call an alligator with a vest?... An investigator.',
                'I tried to sue the airport for misplacing my luggage... I lost my case.',
                'A girl once told me that she wanted to see my python... I only knew javascript.',
                'What do you call a dog that does magic tricks?... A labracadabrador.',
                'Two windmills are standing in a field and one asks the other, “What kind of music do you like?”... The other says “I’m a big metal fan.”',
                'My girlfriend and I often laugh about how competitive we are… But I laugh more.',
                'My friend asked me to help him round up his 37 sheep... I said "40".',
              ];

              return jokes[Math.floor(Math.random() * jokes.length)];
            })(),
            image: playerRef?.canFly ? 'roboImage' : 'playerImage',
          }),
        onLeave: app.clearEvent,
      },
      {
        id: 'randomJoke',
        row: [19, 19],
        col: [19, 23],
        eventHandler: (playerRef: any) =>
          app.setEvent({
            text: 'I can see my house, from here!',
            image: playerRef?.canFly ? 'roboImage' : 'playerImage',
          }),
        onLeave: app.clearEvent,
      },
      // @TODO add missing events
    ];
  };

export const getConfig = ({ openTab, openPage, setEvent }: any) => {
  return getEventConfig({
    app: { openTab, openPage, setEvent, clearEvent: () => setEvent(null) },
  });
};