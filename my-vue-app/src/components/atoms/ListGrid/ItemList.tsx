const ItemList = ({title, children}: {title: string, children: React.ReactElement[] }) => {
    return(
        <section>
            <h2 className='mb-8'>{title}</h2>
            <div className='grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-[30px] lg:grid-cols-4 lg:gap-10'>{children}</div>
        </section>
    )
}

export default ItemList;