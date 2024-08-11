"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function CarouselPlugin() {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true },
        [Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })]
    );

    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [scrollSnaps, setScrollSnaps] = React.useState([]);

    const onSelect = React.useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    React.useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on("select", onSelect);
    }, [emblaApi, onSelect]);

    return (
        <div className="relative flex flex-col items-center justify-center">
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div className="embla__slide" key={index}>
                            <img className="w-full" src={`/slide${index + 1}.jpg`} />
                        </div>
                    ))}
                </div>
            </div>
            <button
                className="absolute w-16 h-16 text-white bg-transparent left-10"
                onClick={() => emblaApi.scrollPrev()}
            >
                <FontAwesomeIcon className="hover:text-black" icon={faChevronLeft} size="2x" />
            </button>
            <button
                className="absolute w-16 h-16 text-white bg-transparent right-10"
                onClick={() => emblaApi.scrollNext()}
            >
                <FontAwesomeIcon className="hover:text-black" icon={faChevronRight} size="2x" />
            </button>
            <div className="absolute bottom-10 embla__dots">
                {scrollSnaps.map((_, index) => (
                    <button
                        key={index}
                        className={`embla__dot ${index === selectedIndex ? "is-selected" : ""}`}
                        onClick={() => emblaApi.scrollTo(index)}
                    />
                ))}
            </div>
        </div>
    );
}