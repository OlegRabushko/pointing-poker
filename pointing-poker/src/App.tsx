import React from 'react';
import GlobalStyle from './components/GlobalStyle/GlobalStyle';
import UserCard from './components/User-card/UserCard';
import GlobalFonts from './components/GlobalStyle/GlobalFonts';
import GameCard from './components/Game-card/Game-card';
import AddCard from './components/Game-card/Add-card';
import IssueCard from './components/Issue-card/Issue-card';
import AddIssueCard from './components/Issue-card/Add-issue-card';
import ScoreCard from './components/Score-card/Score-card';

const App = () => {
  return (
    <>
      <GlobalFonts />
      <GlobalStyle />
      <UserCard />
      <IssueCard />
      <AddIssueCard />
      <ScoreCard />
      <GameCard />
      <AddCard />
    </>
  );
};

export default App;
