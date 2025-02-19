import { useEffect } from "react";
import { useRouter } from "next/router";

export default function MailtoRedirect() {
  const router = useRouter();
  const { email, subject } = router.query;

  useEffect(() => {
    if (email) {
      const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject || "")}`;
      window.location.href = mailtoLink;
      window.close();
    }
  }, [email, subject]);

  return null;
}
