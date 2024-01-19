import { useEffect } from "react";
import "./Scroll.css";
import { motion, useScroll } from "framer-motion";

export function Scroll() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <div className="container">
        <motion.div className="bar" style={{ scaleY: scrollYProgress }} />
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In orci
            eros, efficitur vel ultrices ac, ornare vel nunc. Cras volutpat,
            neque nec fringilla egestas, tortor metus faucibus orci, et varius
            odio nisi sit amet dolor. Donec eros felis, tempus sed lacus quis,
            ultricies accumsan orci. Fusce eu varius dolor, et interdum lectus.
            Nam lobortis, nulla scelerisque suscipit malesuada, ipsum nibh
            iaculis nibh, et posuere mauris justo pellentesque lacus. Aliquam
            faucibus, nunc eu eleifend dictum, eros tortor finibus sapien, eu
            euismod purus nibh vulputate nibh. Vestibulum maximus nisl et ante
            egestas convallis. Duis ut erat fringilla, viverra tortor vitae,
            sollicitudin dolor. Proin maximus tincidunt odio et placerat. Cras
            sed tempus augue, a semper est. Aenean non interdum eros.
          </p>
        </div>
        <div>
          <p>
            Phasellus eros enim, sollicitudin a velit ac, malesuada consectetur
            diam. Duis suscipit ut orci eu aliquam. Proin mollis, felis et
            blandit tincidunt, ipsum felis condimentum ipsum, vel efficitur nisl
            augue in ipsum. Quisque ut semper erat. Suspendisse ante felis,
            accumsan at posuere nec, porttitor sed nibh. Proin at ligula tempus,
            convallis nibh vitae, tempor ipsum. Duis mattis dignissim nisl, non
            commodo leo elementum ut. Vivamus dapibus pretium interdum. Sed eu
            neque ac neque condimentum laoreet eget vitae dui. Sed consequat sed
            metus vitae ultrices. Suspendisse massa velit, molestie convallis
            augue vulputate, molestie porta dolor.
          </p>
        </div>
        <div>
          <p>
            Sed imperdiet neque turpis, ut accumsan justo euismod ac. Ut non
            mauris eu sem sagittis cursus. Nunc placerat mollis euismod. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper
            iaculis ultrices. Aliquam sodales, eros sit amet convallis vehicula,
            augue nulla ultricies nisl, et tristique ligula purus vel magna.
            Suspendisse congue semper enim at egestas. Morbi egestas suscipit
            tortor nec laoreet. Phasellus consequat bibendum dolor, ut elementum
            risus mattis at. Mauris id augue sagittis, porta enim ac,
            consectetur massa. Aenean in consectetur eros. Nullam et elit
            condimentum risus scelerisque dignissim id vitae ligula.
          </p>
        </div>
        <div>
          <p>
            Donec ornare tellus et arcu imperdiet gravida. Sed tempor sapien nec
            nisl laoreet, id pellentesque ipsum venenatis. Sed lobortis congue
            urna at fermentum. Vivamus ipsum arcu, sagittis in urna interdum,
            pellentesque laoreet sem. Fusce id enim vitae turpis tincidunt
            commodo. Nulla gravida pulvinar ipsum vitae tincidunt. Morbi nec
            purus eget turpis gravida porta. Proin nec turpis semper, commodo
            ligula non, interdum ante. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia curae; Suspendisse justo
            neque, luctus ullamcorper libero ut, imperdiet molestie nibh.
            Pellentesque porttitor ultricies magna, vel blandit erat vestibulum
            ut. Nullam rutrum justo sit amet convallis fermentum.
          </p>
        </div>
        <div>
          <p>
            Suspendisse lacinia leo molestie rutrum volutpat. Praesent aliquet
            dolor non varius euismod. Duis ullamcorper ante mi, eget tincidunt
            velit scelerisque vel. Curabitur sed luctus enim. Vestibulum mi
            eros, mollis ultricies malesuada tempus, tincidunt ultrices tellus.
            Mauris lorem arcu, dictum et aliquam ullamcorper, suscipit vulputate
            ante. Maecenas tortor nisi, sagittis ac pellentesque sed, pharetra
            ac justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Fusce mollis libero at vehicula eleifend. Phasellus ultrices ipsum
            justo, ac congue ex ultricies vitae. Quisque eget turpis viverra,
            mattis urna nec, tempus diam. Maecenas ante dui, rhoncus sit amet
            ullamcorper condimentum, tempus quis eros. Cras sodales mi tortor,
            nec fringilla lacus tempor vel. Etiam vehicula cursus lobortis. Sed
            nec nunc id arcu dapibus porta. Fusce mi eros, ornare nec metus ac,
            consectetur ornare justo.
          </p>
        </div>
        <div>
          <p>
            Mauris efficitur ex nisi, non blandit metus iaculis vitae. Nulla in
            enim molestie, suscipit sapien sit amet, commodo nisl. Sed ultricies
            magna vel felis imperdiet, nec tincidunt massa suscipit. Aenean eget
            ante ultricies, imperdiet magna at, dignissim magna. Duis
            ullamcorper a lectus viverra porta. Ut eu justo ac sem blandit
            efficitur nec id lorem. Aliquam vel neque non dui tempus pharetra.
            Nunc semper sem vel metus posuere, a faucibus nisi posuere. Nulla
            sed feugiat mi, in dictum nunc. Mauris ac molestie tellus, eu
            facilisis ipsum. Aliquam placerat id orci vitae tincidunt.
          </p>
        </div>
      </div>
    </>
  );
}
