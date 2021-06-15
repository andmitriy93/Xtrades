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
            <div className="headerAlerts__first">
              <span>All</span>
            </div>
            <div className="headerAlerts__second">
              <span>Top alerts</span>
              <span>Following</span>
            </div>
          </div>
          <div className="recentActivity__header__sort">
            <span>Sort by:</span>
            <select className="recentActivity__header--dropdown">
              <option>All</option>
            </select>
          </div>
        </div>
{/* ----------------------------------------------TABLE------------------------------------- */}
        <table className="recentActivity__table">
          <tr className="recentActivity__table--header">
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
          <tr className="recentActivity__table--row">
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
                <div className="table__logo">
                  <ReactLogoApple />
                </div>
                <div className="table__trade--details">
                  <span className="trade__details--status">Bought AAPL shares</span>
                  <span className="trade__details--price">@$210.22</span>
                </div>
              </div>
            </td>

            <td>
              <div className="table__strategy">
                <span className="table__stategy--type">Momentum</span>
                <span className="table__stategy--type">Lotto</span>
                <span className="table__stategy--type white num">+7</span>
              </div>
            </td>

            <td>
              <div className="table__status">
                <span className="table__status--open">Opened 02/22/21</span>
              </div>
            </td>


            <td>
              <div className="table__profit up">
                <span className="table__profit--grade">Up 4%</span>
              </div>
            </td>

            <td>
              <div className="table__actions">
                <div className="tableActions__like">
                  <i className="tableActions__like--icon fas fa-thumbs-up"></i>
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
          <tr className="recentActivity__table--row active">
            <td>
              <div className="table__trader">
                <ReactLogoKevin />
                <div className="table__trader--title">
                  <span className="trader__title--name">Kevin(momentum)</span>
                  <span className="trader__title--email">@kevin</span>
                </div>
              </div>
            </td>

            <td>
              <div className="table__trade">
                <div className="table__logo">
                  <ReactLogoSP />
                </div>
                <div className="table__trade--details">
                  <span className="trade__details--status">Sold SPY put 08/18/21</span>
                  <span className="trade__details--price">@$210.22</span>
                </div>
              </div>
            </td>

            <td>
              <div className="table__strategy">
                <span className="table__stategy--type white">Day</span>
                <span className="table__stategy--type white">Momentum</span>
                <span className="table__stategy--type num">+2</span>
              </div>
            </td>

            <td>
              <div className="table__status">
                <span className="table__status--open">Opened 08/21/21</span>
                <span className="table__status--close">Closed 8:13 AM</span>
              </div>
            </td>


            <td>
              <div className="table__profit made">
                <span className="table__profit--grade">Made 16%</span>
              </div>
            </td>

            <td>
              <div className="table__actions">
                <div className="tableActions__like">
                  <i className="tableActions__like--icon active  fas fa-thumbs-up"></i>
                  <span className="tableActions__like--count active">37</span>
                </div>
                <div className="tableActions__bookmark">
                  <i className="tableActions__bookamark-icon active fas fa-bookmark"></i>
                  <span className="tableActions__bookmark--count active">7</span>
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
                <ReactLogoCK2 />
                <div className="table__trader--title">
                  <span className="trader__title--name">CKadera</span>
                  <span className="trader__title--email">@ckadera</span>
                </div>
              </div>
            </td>

            <td>
              <div className="table__trade">
                <div className="table__logo">
                  <ReactLogoTSLA />
                </div>
                <div className="table__trade--details">
                  <span className="trade__details--status">Sold TSLA call 08/18/21</span>
                  <span className="trade__details--price">@$210.22</span>
                </div>
              </div>
            </td>

            <td>
              <div className="table__strategy">
                <span className="table__stategy--type">Day</span>
                <span className="table__stategy--type">Lotto</span>
                <span className="table__stategy--type white num">+3</span>
              </div>
            </td>

            <td>
              <div className="table__status">
                <span className="table__status--open">Opened Yesterday</span>
              </div>
            </td>


            <td>
              <div className="table__profit down">
                <span className="table__profit--grade">Down 4%</span>
              </div>
            </td>

            <td>
              <div className="table__actions">
                <div className="tableActions__like">
                  <i className="tableActions__like--icon fas fa-thumbs-up"></i>
                  <span className="tableActions__like--count">24</span>
                </div>
                <div className="tableActions__bookmark">
                  <i className="tableActions__bookamark-icon fas fa-bookmark"></i>
                  <span className="tableActions__bookmark--count">7</span>
                </div>
                <div className="tableActions__comments">
                  <i className="tableActions__comments-icon fas fa-comments"></i>
                  <span className="tableActions__comments--count">0</span>
                </div>
              </div>
            </td>
          </tr>
{/* -------------------------------FORTH ROW----------------------------- */}
          <tr>
            <td>
              <div className="table__trader">
                <ReactLogoCK2 />
                <div className="table__trader--title">
                  <span className="trader__title--name">CKadera</span>
                  <span className="trader__title--email">@ckadera</span>
                </div>
              </div>
            </td>

            <td>
              <div className="table__trade">
                <div className="table__logo">
                  <ReactLogoTSLA />
                </div>
                <div className="table__trade--details">
                  <span className="trade__details--status">Tesla iron condor 08/18/21</span>
                  <span className="trade__details--price">Creadit $35</span>
                </div>
              </div>
            </td>

            <td>
              <div className="table__strategy">
                <span className="table__stategy--type">Day</span>
              </div>
            </td>

            <td>
              <div className="table__status">
                <span className="table__status--open">Opened Yesterday</span>
              </div>
            </td>


            <td>
              <div className="table__profit up">
                <span className="table__profit--grade">Up 4%</span>
              </div>
            </td>

            <td>
              <div className="table__actions">
                <div className="tableActions__like">
                  <i className="tableActions__like--icon fas fa-thumbs-up"></i>
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
          <tr className="recentActivity__table--row active">
            <td>
              <div className="table__trader">
                <ReactLogoKevin />
                <div className="table__trader--title">
                  <span className="trader__title--name">Kevin(momentum)</span>
                  <span className="trader__title--email">@kevin</span>
                </div>
              </div>
            </td>

            <td>
              <div className="table__trade">
                <div className="table__logo">
                  <ReactLogoSP />
                </div>
                <div className="table__trade--details">
                  <span className="trade__details--status">Sold SPY put 08/18/21</span>
                  <span className="trade__details--price">@$210.22</span>
                </div>
              </div>
            </td>

            <td>
              <div className="table__strategy">
                <span className="table__stategy--type white">Day</span>
                <span className="table__stategy--type white">Vertical spread</span>
                <span className="table__stategy--type num">+2</span>
              </div>
            </td>

            <td>
              <div className="table__status">
                <span className="table__status--open">Opened Yesterday</span>
                <span className="table__status--close">Closed 8:13 AM</span>
              </div>
            </td>


            <td>
              <div className="table__profit made">
                <span className="table__profit--grade">Made 16%</span>
              </div>
            </td>

            <td>
              <div className="table__actions">
                <div className="tableActions__like">
                  <i className="tableActions__like--icon active fas fa-thumbs-up"></i>
                  <span className="tableActions__like--count">37</span>
                </div>
                <div className="tableActions__bookmark">
                  <i className="tableActions__bookamark-icon active fas fa-bookmark"></i>
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
          <tr className="recentActivity__table--row active">
            <td>
              <div className="table__trader">
                <ReactLogoCK2 />
                <div className="table__trader--title">
                  <span className="trader__title--name">CKadera</span>
                  <span className="trader__title--email">@ckadera</span>
                </div>
              </div>
            </td>

            <td>
              <div className="table__trade">
                <div className="table__logo">
                  <ReactLogoTSLA />
                </div>
                <div className="table__trade--details">
                  <span className="trade__details--status">Sold TSLA call 08/18/21</span>
                  <span className="trade__details--price">@$210.22</span>
                </div>
              </div>
            </td>

            <td>
              <div className="table__strategy">
                <span className="table__stategy--type white">Long</span>
                <span className="table__stategy--type white">Diagonal put</span>
                <span className="table__stategy--type num">+7</span>
              </div>
            </td>

            <td>
              <div className="table__status">
                <span className="table__status--open">Opened Yesterday</span>
                <span className="table__status--close">Closed 8:13 AM</span>
              </div>
            </td>


            <td>
              <div className="table__profit lost">
                <span className="table__profit--grade">Lost 4%</span>
              </div>
            </td>

            <td>
              <div className="table__actions">
                <div className="tableActions__like">
                  <i className="tableActions__like--icon fas fa-thumbs-up"></i>
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
                <ReactLogoCK2 />
                <div className="table__trader--title">
                  <span className="trader__title--name">CKadera</span>
                  <span className="trader__title--email">@ckadera</span>
                </div>
              </div>
            </td>

            <td>
              <div className="table__trade">
                <div className="table__logo">
                  <ReactLogoAMZN />
                </div>
                <div className="table__trade--details">
                  <span className="trade__details--status">AMZN iron condor 08/18/21</span>
                  <span className="trade__details--price">Debit $35</span>
                </div>
              </div>
            </td>

            <td>
              <div className="table__strategy">
                <span className="table__stategy--type">Swing</span>
              </div>
            </td>

            <td>
              <div className="table__status">
                <span className="table__status--open">Opened Yesterday</span>
              </div>
            </td>


            <td>
              <div className="table__profit up">
                <span className="table__profit--grade">Up 4%</span>
              </div>
            </td>

            <td>
              <div className="table__actions">
                <div className="tableActions__like">
                  <i className="tableActions__like--icon fas fa-thumbs-up"></i>
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
          <tr className="recentActivity__table--row active">
            <td>
              <div className="table__trader">
                <ReactLogoKevin />
                <div className="table__trader--title">
                  <span className="trader__title--name">Kevin(momentum)</span>
                  <span className="trader__title--email">@kevin</span>
                </div>
              </div>
            </td>

            <td>
              <div className="table__trade">
                <div className="table__logo">
                  <ReactLogoSP />
                </div>
                <div className="table__trade--details">
                  <span className="trade__details--status">Sold SPY put 08/18/21</span>
                  <span className="trade__details--price">@$210.22</span>
                </div>
              </div>
            </td>

            <td>
              <div className="table__strategy">
                <span className="table__stategy--type white">Day</span>
                <span className="table__stategy--type white">Momentum</span>
                <span className="table__stategy--type num">+2</span>
              </div>
            </td>

            <td>
              <div className="table__status">
                <span className="table__status--open">Opened Yesterday</span>
                <span className="table__status--close">Closed 8:13 AM</span>
              </div>
            </td>


            <td>
              <div className="table__profit made">
                <span className="table__profit--grade">Made 16%</span>
              </div>
            </td>

            <td>
              <div className="table__actions">
                <div className="tableActions__like">
                  <i className="tableActions__like--icon active fas fa-thumbs-up"></i>
                  <span className="tableActions__like--count active">37</span>
                </div>
                <div className="tableActions__bookmark">
                  <i className="tableActions__bookamark-icon active fas fa-bookmark"></i>
                  <span className="tableActions__bookmark--count active">7</span>
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
                <ReactLogoCK2 />
                <div className="table__trader--title">
                  <span className="trader__title--name">CKadera</span>
                  <span className="trader__title--email">@ckadera</span>
                </div>
              </div>
            </td>

            <td>
              <div className="table__trade">
                <div className="table__log">
                  <ReactLogoTSLA />
                </div>
                <div className="table__trade--details">
                  <span className="trade__details--status">Sold TSLA call 08/18/21</span>
                  <span className="trade__details--price">@$210.22</span>
                </div>
              </div>
            </td>

            <td>
              <div className="table__strategy">
                <span className="table__stategy--type">Day</span>
                <span className="table__stategy--type">Penny stocks</span>
              </div>
            </td>

            <td>
              <div className="table__status">
                <span className="table__status--open">Opened Yesterday</span>
              </div>
            </td>


            <td>
              <div className="table__profit up">
                <span className="table__profit--grade">Up 4%</span>
              </div>
            </td>

            <td>
              <div className="table__actions">
                <div className="tableActions__like">
                  <i className="tableActions__like--icon fas fa-thumbs-up"></i>
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