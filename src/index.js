import React from 'react';
import { createRoot } from 'react-dom/client';
import NoteApp from './components/NoteApp';

import './styles/style.css';

const submission = <h3>Submission Dicoding ReactJs</h3>;

const root = createRoot(document.getElementById('root'));
root.render(<NoteApp />);
