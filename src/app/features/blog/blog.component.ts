import { Component } from '@angular/core';
import { BlogContentInterface } from 'src/app/common/models/blog/blog-content-interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
 
  content: Array<BlogContentInterface> = [
    {
      Title: "first one",
      date:"4 feb 2023",
      intro:"sample intro 1",
      mainHeading:"first one main heading",
      paragraphs:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo modi reiciendis maiores natus architecto, reprehenderit recusandae, quisquam consectetur tempore, iure ipsum! Similique facere aspernatur mollitia, praesentium excepturi ab neque necessitatibus commodi deleniti dicta vitae reiciendis rerum atque eum autem debitis laboriosam totam et quidem eos ipsa? Doloremque rem dolorum, iste itaque aspernatur ducimus tempora corporis ipsam aperiam corrupti, laborum nobis nam fugiat maxime, deleniti neque voluptatibus hic ab odio dolor id accusamus! Distinctio, architecto praesentium. Ullam iste quisquam voluptatibus est maxime omnis. Quos eaque molestias est quas libero, enim, a modi vel ullam repellendus saepe quibusdam itaque consectetur vitae odio illum culpa dolorum. Exercitationem, ullam sunt? Provident dignissimos voluptates tempora autem, accusamus error molestiae commodi, possimus laborum sit itaque eius? Minima, magni itaque a exercitationem placeat amet ipsa nulla eligendi quisquam iure atque voluptas consequatur repellat, voluptatem pariatur suscipit reprehenderit rerum aperiam recusandae qui iste deleniti? Numquam neque facilis hic deleniti unde autem ducimus atque exercitationem repellat sed iste, alias ex illo nulla? Provident saepe velit dicta, quasi laboriosam quis amet dolorum ducimus et exercitationem iste adipisci libero, corporis quibusdam consequatur ipsa distinctio assumenda veritatis? Temporibus quas rem consectetur sint nemo, cum, veritatis itaque quidem dicta blanditiis delectus perferendis! Repellendus."
    },
    {
      Title: "second one",
      date:"5 feb 2023",
      intro:"sample intro 2",
      mainHeading:"second one main heading",
      paragraphs:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo modi reiciendis maiores natus architecto, reprehenderit recusandae, quisquam consectetur tempore, iure ipsum! Similique facere aspernatur mollitia, praesentium excepturi ab neque necessitatibus commodi deleniti dicta vitae reiciendis rerum atque eum autem debitis laboriosam totam et quidem eos ipsa? Doloremque rem dolorum, iste itaque aspernatur ducimus tempora corporis ipsam aperiam corrupti, laborum nobis nam fugiat maxime, deleniti neque voluptatibus hic ab odio dolor id accusamus! Distinctio, architecto praesentium. Ullam iste quisquam voluptatibus est maxime omnis. Quos eaque molestias est quas libero, enim, a modi vel ullam repellendus saepe quibusdam itaque consectetur vitae odio illum culpa dolorum. Exercitationem, ullam sunt? Provident dignissimos voluptates tempora autem, accusamus error molestiae commodi, possimus laborum sit itaque eius? Minima, magni itaque a exercitationem placeat amet ipsa nulla eligendi quisquam iure atque voluptas consequatur repellat, voluptatem pariatur suscipit reprehenderit rerum aperiam recusandae qui iste deleniti? Numquam neque facilis hic deleniti unde autem ducimus atque exercitationem repellat sed iste, alias ex illo nulla? Provident saepe velit dicta, quasi laboriosam quis amet dolorum ducimus et exercitationem iste adipisci libero, corporis quibusdam consequatur ipsa distinctio assumenda veritatis? Temporibus quas rem consectetur sint nemo, cum, veritatis itaque quidem dicta blanditiis delectus perferendis! Repellendus."
    },
    {
      Title: "third one",
      date:"6 feb 2023",
      intro:"sample intro 3",
      mainHeading:"third one main heading",
      paragraphs:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo modi reiciendis maiores natus architecto, reprehenderit recusandae, quisquam consectetur tempore, iure ipsum! Similique facere aspernatur mollitia, praesentium excepturi ab neque necessitatibus commodi deleniti dicta vitae reiciendis rerum atque eum autem debitis laboriosam totam et quidem eos ipsa? Doloremque rem dolorum, iste itaque aspernatur ducimus tempora corporis ipsam aperiam corrupti, laborum nobis nam fugiat maxime, deleniti neque voluptatibus hic ab odio dolor id accusamus! Distinctio, architecto praesentium. Ullam iste quisquam voluptatibus est maxime omnis. Quos eaque molestias est quas libero, enim, a modi vel ullam repellendus saepe quibusdam itaque consectetur vitae odio illum culpa dolorum. Exercitationem, ullam sunt? Provident dignissimos voluptates tempora autem, accusamus error molestiae commodi, possimus laborum sit itaque eius? Minima, magni itaque a exercitationem placeat amet ipsa nulla eligendi quisquam iure atque voluptas consequatur repellat, voluptatem pariatur suscipit reprehenderit rerum aperiam recusandae qui iste deleniti? Numquam neque facilis hic deleniti unde autem ducimus atque exercitationem repellat sed iste, alias ex illo nulla? Provident saepe velit dicta, quasi laboriosam quis amet dolorum ducimus et exercitationem iste adipisci libero, corporis quibusdam consequatur ipsa distinctio assumenda veritatis? Temporibus quas rem consectetur sint nemo, cum, veritatis itaque quidem dicta blanditiis delectus perferendis! Repellendus."
    },
  ]
  active:string=this.content[0].Title;
  activate(str:string):void{
    this.active=str;
  }
}
