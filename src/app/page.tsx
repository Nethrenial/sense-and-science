'use client';
import Hero from "@/components/page/home/Hero";
import SectionHeading from "@/components/util/SectionHeading";
import LatestArticles from "@/components/page/home/LatestArticles";
import AuthorOfTheMonth from "@/components/page/home/AuthorOfTheMonth";
import SuggestedTags from "@/components/page/home/SuggestedTags";

export default function Home() {
    return (
        <>
            <Hero/>
            <SectionHeading>
                TRENDING ON SENSE AND SCIENCE
            </SectionHeading>
            <section className={'flex h-[300px] items-center justify-center bg-purple-800'}>
                <h2 className={'text-4xl text-white'}>Some articles</h2>
            </section>
            <div className={'mt-6 flex flex-col gap-6 xl:flex-row'}>
                <LatestArticles/>
                <div className={'flex w-full flex-col justify-stretch gap-6 md:flex-row xl:w-[34%] xl:flex-col'}>
                    <AuthorOfTheMonth/>
                    <SuggestedTags/>
                </div>
            </div>
        </>
    );
}
