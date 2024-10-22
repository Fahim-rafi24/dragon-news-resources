// json data load 
import newsAll from '../../assets/data/news.json'

// common img import
import Eye from '../../assets/img/Eye.png'
import Bookmark from '../../assets/img/BookMark.png'
import Share from '../../assets/img/Shaired.png'
import Rating from '../../assets/img/Rating.png'



export default function NewsBar() {
    console.log(newsAll[0])
    // header
    // const { img, name, published_date } = newsAll[0].author;
    // const { number } = newsAll[0].rating;
    // const { title, image_url, details, total_view } = newsAll[0];
    return (
        <div className='min-h-full'>
            <h2 className='pl-5 pt-10 text-xl font-semibold text-gray-600'>Dragon News Home</h2>



            {/* map All card from json */}
            {newsAll.map(card => (
                // each card
                <div className="card my-9 border rounded-lg">
                    {/* card Header */}
                    <div className="top bg-gray-100 h-20 flex justify-between rounded-t-lg p-3">
                        <section className='flex'>
                            <div className='h-12 w-12'>
                                <img src={card.author.img} className='rounded-full' />
                            </div>
                            <div className='ml-3 text-sm'>
                                <h5 className='font-bold'>{card.author.name}</h5>
                                <p>{card.author.published_date}</p>
                            </div>
                        </section>
                        <section className='flex mt-3'>
                            <div className='w-7 h-7 mr-3'>
                                <img src={Bookmark} alt="" />
                            </div>
                            <div className='w-7 h-7'>
                                <img src={Share} alt="" />
                            </div>
                        </section>
                    </div>
                    {/* card Title */}
                    <h2 className='text-2xl font-semibold p-3 text-gray-700'>{card.title}</h2>
                    <img className='m-3' src={card.image_url} alt="" />
                    <p className='p-3'>{card.details.substring(0, 200)}...</p>
                    <p className='pl-3 text-orange-500 font-bold'>Read More</p>
                    <hr className='mx-3 my-5' />
                    <section className='flex justify-between mb-5'>
                        <div className='px-3 flex'><img src={Rating} className='mr-3' /> {card.rating.number}</div>
                        <div className='px-3 flex'><img src={Eye} className='mr-3' /> {card.total_view}</div>
                    </section>
                </div>
                // each Card end
            ))}



        </div>
    )
}
