function getRemainingPlayersV1(cards) {
  const teamSize = 11;
  const maxPlayersToDisqualify = 4;
  const finnedPlayers = [];
  const disqualifiedPlayers = { A: [], B: [] };
  for (let i = 0; i < cards.length; ++i) {
      const card = cards[i];
      const team = card[0];
      const player = card.slice(0, 2);
      const cardValue = card[2];
      if (
          (finnedPlayers.find(element => element === player) ||
              cardValue === 'R') &&
          !disqualifiedPlayers[team].find(element => element === player)
      ) {
          disqualifiedPlayers[team].push(player);
      } else {
          finnedPlayers.push(player);
      }
      if (
          disqualifiedPlayers.A.length > maxPlayersToDisqualify ||
          disqualifiedPlayers.B.length > maxPlayersToDisqualify
      )
          break;
  }
  return [
      teamSize - disqualifiedPlayers.A.length,
      teamSize - disqualifiedPlayers.B.length
  ];
}