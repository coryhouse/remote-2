import { ErrorBoundary } from "react-error-boundary";
import RemoteTwo from "./RemoteTwo";
import { ErrorFallback } from "./ErrorFallback";

type RemoteTwoBoundaryProps = {
  baseUrl: string;
  shellCount: number;
  account: string;
  urls: Record<"about" | "home", string>;
  user: { id: number; name: string };
  language: string;
};

export default function RemoteTwoBoundary(props: RemoteTwoBoundaryProps) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <RemoteTwo {...props} />
    </ErrorBoundary>
  );
}
