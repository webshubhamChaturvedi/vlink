import FacebookButton from "app/components/common/SocialButtons/FacebookButton";
import InstagramButton from "app/components/common/SocialButtons/InstagramButton";
import LinkedinButton from "app/components/common/SocialButtons/LinkedinButton";
import TwitterButton from "app/components/common/SocialButtons/TwitterButton";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ShareButtons() {
  const { asPath } = useRouter();
  const links = [
    {
      href: `https://www.facebook.com/share.php?u=${process.env.NEXT_PUBLIC_BASE_URL}${asPath}`,
      alt: "facebook",
      icon: FacebookButton,
    },
    {
      href: `https://linkedin.com/shareArticle?mini=true&url=${process.env.NEXT_PUBLIC_BASE_URL}${asPath}`,
      alt: "linkedin",
      icon: InstagramButton,
    },
    {
      href: `https://www.instagram.com/sharer.php?u=${process.env.NEXT_PUBLIC_BASE_URL}${asPath}`,
      alt: "instagram",
      icon: LinkedinButton,
    },
    {
      href: `https://twitter.com/share?url=${process.env.NEXT_PUBLIC_BASE_URL}${asPath}`,
      alt: "twitter",
      icon: TwitterButton,
    },
  ];

  return (
    <div className="space-x-3">
      {links.map((item, key) => (
        <Link href={item.href} target="_blank" key={key}>
          <item.icon key={key} />
        </Link>
      ))}
    </div>
  );
}
