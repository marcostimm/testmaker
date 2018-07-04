<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tags extends Model
{

    /**
     * Fillable fields for a Tags
     *
     * @var array
     */
    protected $fillable = [
        'question_id',
        'tags'
    ];

    /**
     * Get the question that owns the tags.
     */
    public function question()
    {
        return $this->belongsTo('App\Models\Question');
    }
}
