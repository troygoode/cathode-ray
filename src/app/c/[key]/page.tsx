import Page, {
  generateMetadata,
  generateStaticParamsInternal,
} from "@/components/CassetteLoader";

export { generateMetadata };

export async function generateStaticParams() {
  return generateStaticParamsInternal("c");
}

export default Page;
