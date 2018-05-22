<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Auth;

class Entity extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'entities';

    /**
     * Fillable fields for a Category
     *
     * @var array
     */

    protected $fillable = [
        'name',
        'slug'
    ];

    /**
     * Method setNameAttribute
     *
     * @param string $value Name value
     *
     * @return void return description
     * @throws exception 
     * @access public
     */
    public function setNameAttribute($value)
    {
        $this->attributes['user_id'] = Auth::User()->id;

        $this->attributes['name']    = $value;
        $this->attributes['slug']    = str_slug($value, '-');
    }
}
