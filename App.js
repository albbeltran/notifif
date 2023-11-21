import { AuthProvider } from './src/wrappers/auth-context';
import Navigator from './src/wrappers/Navigator';

export default function App() {
  return (
    <AuthProvider>
      <Navigator />
    </AuthProvider>
  );
}