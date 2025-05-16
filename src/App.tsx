import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import VerbTensesPage from './pages/VerbTensesPage';
import VocabularyPage from './pages/VocabularyPage';
import PracticePage from './pages/PracticePage';
import NotebookPage from './pages/NotebookPage';
import SituationsPage from './pages/SituationsPage';
import IrregularVerbsPage from './pages/IrregularVerbsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/verb-tenses" element={<VerbTensesPage />} />
        <Route path="/vocabulary" element={<VocabularyPage />} />
        <Route path="/practice" element={<PracticePage />} />
        <Route path="/notebook" element={<NotebookPage />} />
        <Route path="/situations" element={<SituationsPage />} />
        <Route path="/irregular-verbs" element={<IrregularVerbsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;