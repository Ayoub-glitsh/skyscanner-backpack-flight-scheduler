import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it('displays the Flight Schedule title', () => {
    render(<App />);
    const titleElement = screen.getByText('Flight Schedule');
    expect(titleElement).toBeInTheDocument();
  });

  it('displays the Continue button', () => {
    render(<App />);
    const buttonElement = screen.getByRole('button', { name: /continue/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it('displays the calendar component', () => {
    render(<App />);
    // Chercher le calendrier par sa classe CSS ou par la présence d'éléments de navigation
    const monthSelector = screen.getByLabelText('Change month');
    expect(monthSelector).toBeInTheDocument();
    
    // Vérifier la présence de boutons de navigation du mois
    const nextMonthButton = screen.getByRole('button', { name: /next month/i });
    const previousMonthButton = screen.getByRole('button', { name: /previous month/i });
    
    expect(nextMonthButton).toBeInTheDocument();
    expect(previousMonthButton).toBeInTheDocument();
  });
});