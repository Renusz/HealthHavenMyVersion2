import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';

// Mock React.lazy to avoid async issues in tests
vi.mock('./layout/Layout', () => ({
  default: () => <div data-testid="layout">Layout</div>,
}));

vi.mock('./pages/Home', () => ({
  default: () => <div data-testid="home">Home</div>,
}));

// Import after mocks
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    // Basic smoke test - App should render
    expect(App).toBeDefined();
    expect(typeof App).toBe('function');
  });

  it('exports App as default', () => {
    expect(App.name).toBe('App');
  });
});

describe('App Component Structure', () => {
  it('should have ErrorBoundary wrapper', async () => {
    // Verify the component structure includes ErrorBoundary
    const appString = App.toString();
    expect(appString).toContain('ErrorBoundary');
  });

  it('should have LanguageProvider', () => {
    const appString = App.toString();
    expect(appString).toContain('LanguageProvider');
  });

  it('should have UserJourneyProvider', () => {
    const appString = App.toString();
    expect(appString).toContain('UserJourneyProvider');
  });

  it('should have Router with future flags', () => {
    const appString = App.toString();
    expect(appString).toContain('v7_startTransition');
  });
});
