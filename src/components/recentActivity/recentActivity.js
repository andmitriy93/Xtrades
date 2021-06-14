import React from 'react'
import {ReactComponent as ReactLogoCK} from '../../img/cKadera.svg'
import {ReactComponent as ReactLogoCK2} from '../../img/Ckadera2.svg'
import {ReactComponent as ReactLogoKevin} from '../../img/Kevin.svg'
import {ReactComponent as ReactLogoApple} from '../../img/apple.svg'
import {ReactComponent as ReactLogoAMZN} from '../../img/amazon-icon.svg'
import {ReactComponent as ReactLogoTSLA} from '../../img/tsla.svg'
import {ReactComponent as ReactLogoSP} from '../../img/spy.svg'
import './recentActivity.css'

class RecentActivity extends React.Component {
  render() {
    return(
      <div className="recentActivity">
        <span className="recentActivity__title">Recent alerts</span>
        {/* --------------------------------HEADER---------------------------------- */}
        <div className="recentActivity__header">
          <div className="recentActivity__header_alerts">
            <span>All</span>
            <span>Top alerts</span>
            <span>Following</span>
          </div>
          <div className="recentActivity__header__sort">
            <span>Sort by:</span>
            <select className="recentActivity__header--dropdown">
              <option>All</option>
            </select>
          </div>
        </div>
{/* ----------------------------------------------TABLE------------------------------------- */}
        <table>
          <tr>
            <th>
              <select>
                <option>Trader</option>
              </select>
            </th>
            <th>
                <select>
                  <option>Trade</option>
                </select>
            </th>
            <th>Strategy type</th>
            <th>
              <select>
                <option>Open/close</option>
              </select>
            </th>
            <th>
              <select>
                <option>Profit/loss</option>
              </select>
            </th>
            <th>
              <select>
                <option>Actions</option>
              </select>
            </th>
          </tr>

{/* ---------------------FIRST ROW----------------------- */}
          <tr>
            <td>
              <div className="table__trader">
                <ReactLogoCK />
                <div className="table__trader--title">
                  <span className="trader__title--name">CKadera</span>
                  <span className="trader__title--email">@ckadera</span>
                </div>
              </div>
            </td>

            <td>
              <div className="table__trade">
                <ReactLogoApple />
                <div className="table__trade--details">
                  <span className="trade__details--status">Bought AAPL shares</span>
                  <span className="trade__details--price">@$210.22</span>
                </div>
              </div>
            </td>

            <td>
              <div className="table__strategy">
                <span className="table__stategy--type1">Momentum</span>
                <span className="table__stategy--type2">Lotto</span>
                <span className="table__stategy--type3">+7</span>
              </div>
            </td>

            <td>
              <div className="table__status">
                <span className="table__status--open">Opened 02/22/21</span>
              </div>
            </td>


            <td>
              <div className="table__profit">
                <span className="table__profit--grade">Up 4%</span>
              </div>
            </td>

            <td>
              <div className="table__actions">
                <div className="tableActions__like">
                  <i className="tableActions__like--icon far fa-thumbs-up"></i>
                  <span className="tableActions__like--count">24</span>
                </div>
                <div className="tableActions__bookmark">
                  <i className="tableActions__bookamark-icon fas fa-bookmark"></i>
                  <span className="tableActions__bookmark--count">7</span>
                </div>
                <div className="tableActions__comments">
                  <i className="tableActions__comments-icon fas fa-comments"></i>
                  <span className="tableActions__comments--count">37</span>
                </div>
              </div>
            </td>
          </tr>
{/* ------------------------SECOND ROW------------------------- */}
          <tr>
            <td>
              <div className="table__trader">
                <ReactLogoCK />
                <div className="table__trader--title">
                  <span className="trader__title--name">CKadera</span>
                  <span className="trader__title--email">@ckadera</span>
                </div>
              </div>
            </td>

            <td>
              <div className="table__trade">
                <ReactLogoApple />
                <div className="table__trade--details">
                  <span className="trade__details--status">Bought AAPL shares</span>
                  <span className="trade__details--price">@$210.22</span>
                </div>
              </div>
            </td>

            <td>
              <div className="table__strategy">
                <span className="table__stategy--type1">Momentum</span>
                <span className="table__stategy--type2">Lotto</span>
                <span className="table__stategy--type3">+7</span>
              </div>
            </td>

            <td>
              <div className="table__status">
                <span className="table__status--open">Opened 02/22/21</span>
              </div>
            </td>


            <td>
              <div className="table__profit">
                <span className="table__profit--grade">Up 4%</span>
              </div>
            </td>

            <td>
              <div className="table__actions">
                <div className="tableActions__like">
                  <i className="tableActions__like--icon far fa-thumbs-up"></i>
                  <span className="tableActions__like--count">24</span>
                </div>
                <div className="tableActions__bookmark">
                  <i className="tableActions__bookamark-icon fas fa-bookmark"></i>
                  <span className="tableActions__bookmark--count">7</span>
                </div>
                <div className="tableActions__comments">
                  <i className="tableActions__comments-icon fas fa-comments"></i>
                  <span className="tableActions__comments--count">37</span>
                </div>
              </div>
            </td>
          </tr>
{/* --------------------------THIRD ROW----------------------------- */}
          <tr>
            <td>
              <div className="table__trader">
                <ReactLogoCK />
                <div className="table__trader--title">
                  <span className="trader__title--name">CKadera</span>
                  <span className="trader__title--email">@ckadera</span>
                </div>
              </div>
            </td>

            <td>
              <div className="table__trade">
                <ReactLogoApple />
                <div className="table__trade--details">
                  <span className="trade__details--status">Bought AAPL shares</span>
                  <span className="trade__details--price">@$210.22</span>
                </div>
              </div>
            </td>

            <td>
              <div className="table__strategy">
                <span className="table__stategy--type1">Momentum</span>
                <span className="table__stategy--type2">Lotto</span>
                <span className="table__stategy--type3">+7</span>
              </div>
            </td>

            <td>
              <div className="table__status">
                <span className="table__status--open">Opened 02/22/21</span>
              </div>
            </td>


            <td>
              <div className="table__profit">
                <span className="table__profit--grade">Up 4%</span>
              </div>
            </td>

            <td>
              <div className="table__actions">
                <div className="tableActions__like">
                  <i className="tableActions__like--icon far fa-thumbs-up"></i>
                  <span className="tableActions__like--count">24</span>
                </div>
                <div className="tableActions__bookmark">
                  <i className="tableActions__bookamark-icon fas fa-bookmark"></i>
                  <span className="tableActions__bookmark--count">7</span>
                </div>
                <div className="tableActions__comments">
                  <i className="tableActions__comments-icon fas fa-comments"></i>
                  <span className="tableActions__comments--count">37</span>
                </div>
              </div>
            </td>
          </tr>
{/* -------------------------------FORTH ROW----------------------------- */}
          <tr>
            <td>
              <div className="table__trader">
                <ReactLogoCK />
                <div className="table__trader--title">
                  <span className="trader__title--name">CKadera</span>
                  <span className="trader__title--email">@ckadera</span>
                </div>
              </div>
            </td>

            <td>
              <div className="table__trade">
                <ReactLogoApple />
                <div className="table__trade--details">
                  <span className="trade__details--status">Bought AAPL shares</span>
                  <span className="trade__details--price">@$210.22</span>
                </div>
              </div>
            </td>

            <td>
              <div className="table__strategy">
                <span className="table__stategy--type1">Momentum</span>
                <span className="table__stategy--type2">Lotto</span>
                <span className="table__stategy--type3">+7</span>
              </div>
            </td>

            <td>
              <div className="table__status">
                <span className="table__status--open">Opened 02/22/21</span>
              </div>
            </td>


            <td>
              <div className="table__profit">
                <span className="table__profit--grade">Up 4%</span>
              </div>
            </td>

            <td>
              <div className="table__actions">
                <div className="tableActions__like">
                  <i className="tableActions__like--icon far fa-thumbs-up"></i>
                  <span className="tableActions__like--count">24</span>
                </div>
                <div className="tableActions__bookmark">
                  <i className="tableActions__bookamark-icon fas fa-bookmark"></i>
                  <span className="tableActions__bookmark--count">7</span>
                </div>
                <div className="tableActions__comments">
                  <i className="tableActions__comments-icon fas fa-comments"></i>
                  <span className="tableActions__comments--count">37</span>
                </div>
              </div>
            </td>
          </tr>
{/* -------------------------------FIFTH ROW---------------------------- */}
          <tr>
            <td>
              <div className="table__trader">
                <ReactLogoCK />
                <div className="table__trader--title">
                  <span className="trader__title--name">CKadera</span>
                  <span className="trader__title--email">@ckadera</span>
                </div>
              </div>
            </td>

            <td>
              <div className="table__trade">
                <ReactLogoApple />
                <div className="table__trade--details">
                  <span className="trade__details--status">Bought AAPL shares</span>
                  <span className="trade__details--price">@$210.22</span>
                </div>
              </div>
            </td>

            <td>
              <div className="table__strategy">
                <span className="table__stategy--type1">Momentum</span>
                <span className="table__stategy--type2">Lotto</span>
                <span className="table__stategy--type3">+7</span>
              </div>
            </td>

            <td>
              <div className="table__status">
                <span className="table__status--open">Opened 02/22/21</span>
              </div>
            </td>


            <td>
              <div className="table__profit">
                <span className="table__profit--grade">Up 4%</span>
              </div>
            </td>

            <td>
              <div className="table__actions">
                <div className="tableActions__like">
                  <i className="tableActions__like--icon far fa-thumbs-up"></i>
                  <span className="tableActions__like--count">24</span>
                </div>
                <div className="tableActions__bookmark">
                  <i className="tableActions__bookamark-icon fas fa-bookmark"></i>
                  <span className="tableActions__bookmark--count">7</span>
                </div>
                <div className="tableActions__comments">
                  <i className="tableActions__comments-icon fas fa-comments"></i>
                  <span className="tableActions__comments--count">37</span>
                </div>
              </div>
            </td>
          </tr>
{/* ----------------------------------SIXTH ROW---------------------------- */}
          <tr>
            <td>
              <div className="table__trader">
                <ReactLogoCK />
                <div className="table__trader--title">
                  <span className="trader__title--name">CKadera</span>
                  <span className="trader__title--email">@ckadera</span>
                </div>
              </div>
            </td>

            <td>
              <div className="table__trade">
                <ReactLogoApple />
                <div className="table__trade--details">
                  <span className="trade__details--status">Bought AAPL shares</span>
                  <span className="trade__details--price">@$210.22</span>
                </div>
              </div>
            </td>

            <td>
              <div className="table__strategy">
                <span className="table__stategy--type1">Momentum</span>
                <span className="table__stategy--type2">Lotto</span>
                <span className="table__stategy--type3">+7</span>
              </div>
            </td>

            <td>
              <div className="table__status">
                <span className="table__status--open">Opened 02/22/21</span>
              </div>
            </td>


            <td>
              <div className="table__profit">
                <span className="table__profit--grade">Up 4%</span>
              </div>
            </td>

            <td>
              <div className="table__actions">
                <div className="tableActions__like">
                  <i className="tableActions__like--icon far fa-thumbs-up"></i>
                  <span className="tableActions__like--count">24</span>
                </div>
                <div className="tableActions__bookmark">
                  <i className="tableActions__bookamark-icon fas fa-bookmark"></i>
                  <span className="tableActions__bookmark--count">7</span>
                </div>
                <div className="tableActions__comments">
                  <i className="tableActions__comments-icon fas fa-comments"></i>
                  <span className="tableActions__comments--count">37</span>
                </div>
              </div>
            </td>
          </tr>
{/* -------------------------------SEVENTH ROW--------------------------- */}
          <tr>
            <td>
              <div className="table__trader">
                <ReactLogoCK />
                <div className="table__trader--title">
                  <span className="trader__title--name">CKadera</span>
                  <span className="trader__title--email">@ckadera</span>
                </div>
              </div>
            </td>

            <td>
              <div className="table__trade">
                <ReactLogoApple />
                <div className="table__trade--details">
                  <span className="trade__details--status">Bought AAPL shares</span>
                  <span className="trade__details--price">@$210.22</span>
                </div>
              </div>
            </td>

            <td>
              <div className="table__strategy">
                <span className="table__stategy--type1">Momentum</span>
                <span className="table__stategy--type2">Lotto</span>
                <span className="table__stategy--type3">+7</span>
              </div>
            </td>

            <td>
              <div className="table__status">
                <span className="table__status--open">Opened 02/22/21</span>
              </div>
            </td>


            <td>
              <div className="table__profit">
                <span className="table__profit--grade">Up 4%</span>
              </div>
            </td>

            <td>
              <div className="table__actions">
                <div className="tableActions__like">
                  <i className="tableActions__like--icon far fa-thumbs-up"></i>
                  <span className="tableActions__like--count">24</span>
                </div>
                <div className="tableActions__bookmark">
                  <i className="tableActions__bookamark-icon fas fa-bookmark"></i>
                  <span className="tableActions__bookmark--count">7</span>
                </div>
                <div className="tableActions__comments">
                  <i className="tableActions__comments-icon fas fa-comments"></i>
                  <span className="tableActions__comments--count">37</span>
                </div>
              </div>
            </td>
          </tr>
{/* ------------------------------------EIGHTH ROW-------------------------- */}
          <tr>
            <td>
              <div className="table__trader">
                <ReactLogoCK />
                <div className="table__trader--title">
                  <span className="trader__title--name">CKadera</span>
                  <span className="trader__title--email">@ckadera</span>
                </div>
              </div>
            </td>

            <td>
              <div className="table__trade">
                <ReactLogoApple />
                <div className="table__trade--details">
                  <span className="trade__details--status">Bought AAPL shares</span>
                  <span className="trade__details--price">@$210.22</span>
                </div>
              </div>
            </td>

            <td>
              <div className="table__strategy">
                <span className="table__stategy--type1">Momentum</span>
                <span className="table__stategy--type2">Lotto</span>
                <span className="table__stategy--type3">+7</span>
              </div>
            </td>

            <td>
              <div className="table__status">
                <span className="table__status--open">Opened 02/22/21</span>
              </div>
            </td>


            <td>
              <div className="table__profit">
                <span className="table__profit--grade">Up 4%</span>
              </div>
            </td>

            <td>
              <div className="table__actions">
                <div className="tableActions__like">
                  <i className="tableActions__like--icon far fa-thumbs-up"></i>
                  <span className="tableActions__like--count">24</span>
                </div>
                <div className="tableActions__bookmark">
                  <i className="tableActions__bookamark-icon fas fa-bookmark"></i>
                  <span className="tableActions__bookmark--count">7</span>
                </div>
                <div className="tableActions__comments">
                  <i className="tableActions__comments-icon fas fa-comments"></i>
                  <span className="tableActions__comments--count">37</span>
                </div>
              </div>
            </td>
          </tr>
{/* ----------------------------------------NINTH ROW----------------------------- */}
          <tr>
            <td>
              <div className="table__trader">
                <ReactLogoCK />
                <div className="table__trader--title">
                  <span className="trader__title--name">CKadera</span>
                  <span className="trader__title--email">@ckadera</span>
                </div>
              </div>
            </td>

            <td>
              <div className="table__trade">
                <ReactLogoApple />
                <div className="table__trade--details">
                  <span className="trade__details--status">Bought AAPL shares</span>
                  <span className="trade__details--price">@$210.22</span>
                </div>
              </div>
            </td>

            <td>
              <div className="table__strategy">
                <span className="table__stategy--type1">Momentum</span>
                <span className="table__stategy--type2">Lotto</span>
                <span className="table__stategy--type3">+7</span>
              </div>
            </td>

            <td>
              <div className="table__status">
                <span className="table__status--open">Opened 02/22/21</span>
              </div>
            </td>


            <td>
              <div className="table__profit">
                <span className="table__profit--grade">Up 4%</span>
              </div>
            </td>

            <td>
              <div className="table__actions">
                <div className="tableActions__like">
                  <i className="tableActions__like--icon far fa-thumbs-up"></i>
                  <span className="tableActions__like--count">24</span>
                </div>
                <div className="tableActions__bookmark">
                  <i className="tableActions__bookamark-icon fas fa-bookmark"></i>
                  <span className="tableActions__bookmark--count">7</span>
                </div>
                <div className="tableActions__comments">
                  <i className="tableActions__comments-icon fas fa-comments"></i>
                  <span className="tableActions__comments--count">37</span>
                </div>
              </div>
            </td>
          </tr>








        </table>

      </div>
    )
  }
}

export default RecentActivity