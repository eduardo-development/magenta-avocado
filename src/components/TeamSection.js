import React from 'react';
import _ from 'lodash';

import {safePrefix, markdownify} from '../utils';

export default class TeamSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section');
        return (
            <section className="section section--team">
              {_.get(section, 'title') && (
              <div className="container container--md align-center">
                <h2 className="section__title">{_.get(section, 'title')}</h2>
              </div>
              )}
              <div className="container container--lg">
                <div className="flex flex--col-3">
                  {_.map(_.get(section, 'team'), (person, person_idx) => {
                      let person_data = person;
                      return (
                      <div key={person_idx} className="cell">
                        <div className="card team-member">
                          {person_data.photo && (
                          <figure className="card__media card__media--bottom">
                            <img src={safePrefix(person_data.photo)} alt={person_data.first_name + (person_data.last_name ? (' ' + person_data.last_name) : '') + ' Photo'} />
                          </figure>
                          )}
                          <div className="card__body">
                            <header className="card__header">
                              <h3 className="h4 card__title">{person_data.first_name} {person_data.last_name}</h3>
                            </header>
                            {person_data.bio && (
                            <div className="card__copy">
                              {markdownify(person_data.bio)}
                            </div>
                            )}
                          </div>
                        </div>
                      </div>
                      )
                  })}
                </div>
              </div>
            </section>
        );
    }
}
