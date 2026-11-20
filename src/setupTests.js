import '@testing-library/jest-dom';
import { TextDecoder, TextEncoder } from 'util';

// React Router 7 expects these; the jsdom bundled with react-scripts lacks them.
global.TextEncoder ??= TextEncoder;
global.TextDecoder ??= TextDecoder;
