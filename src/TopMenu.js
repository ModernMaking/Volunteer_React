import Menu, { SubMenu, MenuItem } from 'rc-menu';
export default function TopMenu(props)
{
    return (
    <Menu>
        <a href="/">Главная</a>
        <a href="dd.html"> Добрые дела </a>
        <a href="dd.html"> Новости</a>
        <a href="dd.html"> Проекты </a>
        <a href="dd.html"> Организаторы </a>
        <a href="dd.html"> Волонтеры </a>
        <a href="/ITS"> ITS для волонтеров </a>
    </Menu>
    )
}